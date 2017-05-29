// Initialize Firebase
var config = {
    apiKey: "AIzaSyAobWUy0Pr2mOsfkT2zGplFVp1IauzVKJQ",
    authDomain: "greetail-calculator.firebaseapp.com",
    databaseURL: "https://greetail-calculator.firebaseio.com",
    projectId: "greetail-calculator",
    storageBucket: "greetail-calculator.appspot.com",
    messagingSenderId: "714879421168"
};


$(function () {

    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

});

firebase.initializeApp(config);

var sectionsRef = firebase.database().ref('sections');
var quotesRef = firebase.database().ref('quotes');

var shopper = {
    name: '',
    email: ''
}

var quote = {
    user: this.shopper,
    features: []
}

var quoteId = '';

//vuejs section
var app = new Vue({
    el: '#app',
    firebase: {
        sections: sectionsRef
    },
    data: {
        shopper,
        quote,
        total: 10000,
        rate: 50,
        quoteId: ''
    },
    methods: {
        addQuote: function () {
            var newQuote = quotesRef.push();
            newQuote.set({
                "quote": this.quote
            });
            //retrieve the newly created quote id
            this.quoteId = newQuote.key;
        },
        manageQuoteFeatures: function (feature) {
            if (feature.selected) {
                this.addFeatureToQuote(feature);
            } else {
                this.removeFeatureFromQuote(feature);
            }
        },
        addFeatureToQuote: function (feature) {
            this.quote.features.push(feature);
            this.total = this.total + (feature.hours * this.rate);
        },
        removeFeatureFromQuote: function (feature) {
            this.quote.features.splice(this.quote.features.indexOf(feature), 1);
            this.total = this.total - (feature.hours * this.rate);
        },
        formatNumber: function (total) {
            total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        }
    },
    computed: {
        quoteUrl: function() {
            return 'https://greetail.co/app-calculator/' + this.quoteId;
        }
    }
});