'use strict';

/**
 * E-Command - Gestion des routes
 */
angular
.module('ecApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'HomeCtrl',
        templateUrl: './app/components/home/home.template.html',
        css: './assets/styles/home.style.css'
      })
      .when('/home', {
        controller: 'HomeCtrl',
        templateUrl: './app/components/home/home.template.html',
        css: './assets/styles/home.style.css'
      })
      .when('/articles', {
          controller: 'ArticleListCtrl',
          templateUrl: './app/components/article/article.template.html',
          css: './assets/styles/article.style.css'
      })
      .when('/panier', {
        controller: 'BasketCtrl',
        templateUrl: './app/components/basket/basket.template.html',
        css: './assets/styles/basket.style.css'
      })
      .when('/livraison', {
        controller: 'ShippingCtrl',
        templateUrl: './app/components/shipping/shipping.template.html',
        css: './assets/styles/shipping.style.css'
      })
      .when('/confirmation', {
        controller: 'CommandConfirmationCtrl',
        templateUrl: './app/components/command-confirmation/command-confirmation.template.html',
        css: './assets/styles/command-confirmation.style.css'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
