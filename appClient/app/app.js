'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', ['ngRoute', 'angularCSS']);

app.constant('config', {
    templatePath: 'http://localhost:3000/'
});

app.config(function ($routeProvider) {
    $routeProvider
            .when("/", {
               templateUrl: "views/article.html",
                css: "css/article.css"
            })
            .when("/inscription", {
                template: '<inscription></inscription>',
                css: "css/inscription.css",
            })
            .when("/login", {
                templateUrl: "views/login.html",
                css: "css/login.css"
            })
            .when("/article", {
                templateUrl: "views/article.html",
                css: "css/article.css"
            })
            .when("/panier", {
                templateUrl: "views/panier.html",
                css: "css/panier.css"
            })
            .when("/validation", {
                template: '<validation></validation>',
                css: "css/validation.css",
            });
            

});