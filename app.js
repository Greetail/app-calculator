//vuejs section
var app = new Vue({
    el: '#app',
    data: {
        "sections": [
            {
                "section_name": "How do users authenticate",
                "features": [
                    {
                        "name": "Email login", "description": "connect your users via email and password",
                        "selected": false
                    },
                    {
                        "name": "Social login", "description": "authorize users with social networks such as facebook or twitter",
                        "selected": false
                    }]
            },
            {
                "section_name": "Communication",
                "features": [
                    {
                        "name": "SMS - text messages",
                        "description": "connect to your users by texting them",
                        "selected": true
                    },
                    {
                        "name": "Burrito sabanero",
                        "description": "another burrito instance",
                        "selected": false
                    }]
            }
        ]
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split("").reverse().join("")
        }
    }
});