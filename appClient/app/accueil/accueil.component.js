'use strict';

angular.module('accueil', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/accueil', {
    templateUrl: 'accueil/accueil.template.html',
    controller: 'accueilCtrl'
  });
}])

.controller('accueilCtrl', [function() {

}]);