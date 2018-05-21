'use strict';

angular
  .module('panier')
  .controller('PanierCtrl', ['$scope', 'BasketFactory', function($scope, BasketFactory) {

    // Panier de commande
    $scope.panier = BasketFactory.getBasketContent();
    $scope.prixTotalHT = 0;
    $scope.prixTotalLigne = 0;
    $scope.prixTotalHTFloat = '';
    $scope.prixTotalLigneFloat =  '';

    $scope.upQuantity = function(articleLigne) {
      BasketFactory.addArticleQuantity(articleLigne);
      $scope.majInfos();
    }

    $scope.downQuantity = function(articleLigne) {
      BasketFactory.removeArticleQuantity(articleLigne);
      $scope.majInfos();
    }

    $scope.majInfos = function() {
      $scope.prixTotalHT = 0;
      $scope.prixTotalLigne = 0;
      BasketFactory.getFloatPrice = function(prix) {
        return parseFloat(prix).toFixed(2);
      };

      $scope.panier.forEach(element => {
        // Prix unitaire HT en Float - Format '1.00'
        element.prixHTFloat = BasketFactory.getFloatPrice(element.prixHT);

        // Prix total HT par ligne
        element.prixTotalLigne = (element.prixHT * element.quantite);
        element.prixTotalLigneFloat = BasketFactory.getFloatPrice(element.prixTotalLigne);
        
        // Prix total HT du panier
        $scope.prixTotalLigne += element.prixTotalLigne;
      });

      $scope.prixTotalLigne = BasketFactory.getPricePrecision($scope.prixTotalLigne, 2);

      // Prix total HT du panier en Float
      $scope.prixTotalHTFloat = BasketFactory.getFloatPrice($scope.prixTotalLigne);
    }

    $scope.panier.forEach(element => {
      // Prix unitaire HT en Float - Format '1.00'
      element.prixHTFloat = BasketFactory.getFloatPrice(element.prixHT);

      // Prix total HT par ligne
      element.prixTotalLigne = (element.prixHT * element.quantite);
      element.prixTotalLigneFloat = BasketFactory.getFloatPrice(element.prixTotalLigne);
      
      // Prix total HT du panier
      $scope.prixTotalLigne += element.prixTotalLigne;
    });

    $scope.prixTotalLigne = BasketFactory.getPricePrecision($scope.prixTotalLigne, 2);

    // Prix total HT du panier en Float
    $scope.prixTotalHTFloat = BasketFactory.getFloatPrice($scope.prixTotalLigne);

  }]);