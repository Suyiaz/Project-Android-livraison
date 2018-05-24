'use strict';

angular
  .module('BasketModule', [
    'ngRoute',
    'BasketService'
  ])
  .controller('BasketCtrl', ['$scope', 'BasketFactory', function($scope, BasketFactory) {

    $scope.basketArticlesList = BasketFactory.getBasketContent();     // Panier de commande
    $scope.totalBasketCheckPriceExcludingTax;                         // Prix total HT
    $scope.totalBasketCheckPriceExcludingTaxFloatFormat;              // Prix total HT au format 'Float'

    $scope.$watch('basketArticlesList', function() {
      $scope.calculateBasketCheck($scope.basketArticlesList);
    });

    /**
     * Calcule le prix HT de chaque ligne et le prix total HT du panier
     */
    $scope.calculateBasketCheck = function(basketArticlesList) {
      var basketCheck = BasketFactory.calculateBasketCheck(basketArticlesList);
      
      angular.extend($scope.basketArticlesList, basketCheck.basketArticlesList);

      $scope.totalBasketCheckPriceExcludingTax = basketCheck.totalBasketCheckPriceExcludingTax;
      $scope.totalBasketCheckPriceExcludingTaxFloatFormat = basketCheck.totalBasketCheckPriceExcludingTaxFloatFormat;
    };

    $scope.upQuantity = function(articleLigne) {
      BasketFactory.addArticleQuantity(articleLigne);
      $scope.calculateBasketCheck($scope.basketArticlesList);
    }

    $scope.downQuantity = function(articleLigne) {
      BasketFactory.removeArticleQuantity(articleLigne);
      $scope.calculateBasketCheck($scope.basketArticlesList);
    }

    $scope.removeArticle = function(articleLigne) {
      var articleIndex = $scope.basketArticlesList.findIndex(basketItem => basketItem.idArticle === articleLigne.idArticle);
      BasketFactory.removeArticle(articleIndex, true);
      $scope.calculateBasketCheck($scope.basketArticlesList);
    }

  }]);