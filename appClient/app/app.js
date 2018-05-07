'use strict';

// Declare app level module which depends on views, and components
var app=angular.module('myApp', ['ngRoute','angularCSS']);

app.config(function($routeProvider) {
    $routeProvider
   
    .when("/inscription", {
        templateUrl : "views/inscription.html",
        css:"css/inscription.css"
    })
    .when("/login", {
        templateUrl : "views/login.html",
        css:"css/login.css"
    })
    .when("/article", {
        templateUrl : "views/article.html",
        css:"css/article.css"
    });
});