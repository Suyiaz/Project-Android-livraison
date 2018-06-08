'use strict';

/**
 * @ngdoc overview
 * @name ecApp
 * @description
 * # ecApp
 *
 * Main module of the application.
 */
angular
  .module('ecApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ArticleService',
    'BasketService',
    'ShippingService',
    'HomeModule',
    'ArticleModule',
    'BasketModule',
    'ShippingModule',
    'CommandConfirmationModule',
    'ecNavbar',
    'ecFooter'
  ])
  .constant('config', {
      dataPath: 'http://localhost:3000/'
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'HomeCtrl',
        templateUrl: 'views/home.template.html',
        css: 'styles/home.style.css'
      })
      .when('/home', {
        controller: 'HomeCtrl',
        templateUrl: 'scripts/controllers/home.template.html',
        css: 'styles/home.style.css'
      })
      .when('/articles', {
          controller: 'ArticleListCtrl',
          templateUrl: 'views/article.template.html',
          css: 'styles/article.style.css'
      })
      .when('/panier', {
        controller: 'BasketCtrl',
        templateUrl: 'views/basket.template.html',
        css: 'styles/basket.style.css'
      })
      .when('/livraison', {
        controller: 'ShippingCtrl',
        templateUrl: 'views/shipping.template.html',
        css: 'styles/shipping.style.css'
      })
      .when('/confirmation', {
        controller: 'CommandConfirmationCtrl',
        templateUrl: 'views/command-confirmation.template.html',
        css: 'styles/command-confirmation.style.css'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
