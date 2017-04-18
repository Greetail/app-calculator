// Initialize Firebase
var config = {
    apiKey: "AIzaSyAobWUy0Pr2mOsfkT2zGplFVp1IauzVKJQ",
    authDomain: "greetail-calculator.firebaseapp.com",
    databaseURL: "https://greetail-calculator.firebaseio.com",
    projectId: "greetail-calculator",
    storageBucket: "greetail-calculator.appspot.com",
    messagingSenderId: "714879421168"
};

firebase.initializeApp(config);

var sectionsRef = firebase.database().ref('sections');
var quotesRef = firebase.database().ref('quotes');



//vuejs section
var app = new Vue({
    el: '#app',
    firebase: {
        sections: sectionsRef
    },
    data: {
        newUser: {
            name: '',
            email: ''
        },
        quote: {
            user: this.newUser,
            features: []
        }
    },
    methods: {
        addQuote: function () {
            var newQuote = quotesRef.push();
            newQuote.set({
                "quote": this.quote
            });
        },
        manageQuoteFeatures: function(feature){
            if (feature.selected) {
                this.addFeatureToQuote(feature);
            } else {
                this.removeFeatureFromQuote(feature);
            }
        },
        addFeatureToQuote: function(feature){
            this.quote.user = this.newUser;
            this.quote.features.push(feature);
        },
        removeFeatureFromQuote: function(feature){
            this.quote.features.splice(this.quote.features.indexOf(feature), 1);
        }
    }
});