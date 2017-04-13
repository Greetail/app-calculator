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


//vuejs section
var app = new Vue({
    el: '#app',
    firebase: {
        sections: sectionsRef
    }
});