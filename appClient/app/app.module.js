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
    'ngCookies',
    'ngRoute',
    'angularCSS',
    'ArticleService',
    'BasketService',
    'CategoryService',
    'CustomerService',
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
  .controller('AppCtrl', ['CustomerFactory', function(CustomerFactory) {

    // Client
    //CustomerFactory.getCustomerById(1);
    
  }]);
