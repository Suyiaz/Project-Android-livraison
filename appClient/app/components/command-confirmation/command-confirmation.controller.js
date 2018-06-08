'use strict';

angular
    .module('CommandConfirmationModule', [
        'ngRoute',
        'BasketService'
      ])
    .controller('CommandConfirmationCtrl', ['$scope', 'BasketFactory', function($scope, BasketFactory) {

        $scope.basketArticlesList = BasketFactory.getBasketContent();     // Panier de commande
        $scope.totalBasketCheckPriceExcludingTax = 0;                         // Prix total HT
        $scope.totalBasketCheckPriceExcludingTaxFloatFormat = null;              // Prix total HT au format 'Float'
        $scope.shippingPriceLabel = '';                                   // Libellé des frais de livraison
        $scope.shippingPrice = 0;                                             // Frais de livraison
        $scope.vatPrice = 0;                                                  // Frais de TVA
        $scope.vatPriceFloatFormat = null;                                       // Frais de TVA au format 'Float'
        $scope.totalBasketCheckPriceIncludingTax = 0;                         // Prix total TTC
        $scope.totalBasketCheckPriceIncludingTaxFloatFormat = null;              // Prix total TTC au format 'Float'
        $scope.isCommandConfirmed = false;
    
        $scope.$watch('basketArticlesList', function() {
          $scope.calculateBasketCheck($scope.basketArticlesList);
        });

        /**
         * Calcule le prix HT de chaque ligne et le prix total HT du panier
         */
        $scope.calculateBasketCheck = function(basketArticlesList) {
          var basketCheck = BasketFactory.calculateBasketCheck(basketArticlesList, true);
          
          angular.extend($scope.basketArticlesList, basketCheck.basketArticlesList);
    
          $scope.totalBasketCheckPriceExcludingTax = basketCheck.totalBasketCheckPriceExcludingTax;
          $scope.totalBasketCheckPriceExcludingTaxFloatFormat = basketCheck.totalBasketCheckPriceExcludingTaxFloatFormat;
          $scope.vatPrice = basketCheck.vatPrice;
          $scope.vatPriceFloatFormat = basketCheck.vatPriceFloatFormat;
          $scope.shippingPrice = basketCheck.shippingPrice;
          $scope.shippingPriceLabel = basketCheck.shippingPriceLabel;
          $scope.totalBasketCheckPriceIncludingTax = basketCheck.totalBasketCheckPriceIncludingTax;
          $scope.totalBasketCheckPriceIncludingTaxFloatFormat = basketCheck.totalBasketCheckPriceIncludingTaxFloatFormat;
        };

        $scope.confirmCommand = function() {
            $scope.isCommandConfirmed = true;
        };
        
        /*$scope.prixTotalHT = 0;
        $scope.prixTotalHTFloat = '';
        $scope.fraisLivraisonLibelle = '';
        $scope.fraisLivraison = 0;
        $scope.fraisTVA = 0;
        $scope.fraisTVAFloat = '';
        $scope.prixTotalTTC = 0;
        $scope.prixTotalTTCFloat = '';

        $scope.basketArticlesList.forEach(element => {
            // Prix unitaire HT en Float - Format '1.00'
            element.unitPriceExcludingTaxFloatFormat = BasketFactory.getFloatPrice(element.unitPriceExcludingTax);
    
            // Prix total HT par ligne
            element.prixTotalLigne = (element.unitPriceExcludingTax * element.quantite);
            element.prixTotalLigneFloat = BasketFactory.getFloatPrice(element.prixTotalLigne);

            // Frais de TVA
            element.fraisTVALigne = (element.prixTotalLigne / 100 * element.taux);
            
            // Prix total HT du panier
            $scope.prixTotalHT += element.prixTotalLigne;
            $scope.fraisTVA += element.fraisTVALigne;

        });

        $scope.fraisTVAFloat = BasketFactory.getFloatPrice($scope.fraisTVA);
    
        // Prix total HT du panier en Float
        $scope.prixTotalHTFloat = BasketFactory.getFloatPrice($scope.prixTotalHT);

        // Frais de livraison
        if (ShippingFactory.getShippingModeSelected().frais === "Gratuit") {
            $scope.fraisLivraisonLibelle = ShippingFactory.getShippingModeSelected().frais;
            $scope.fraisLivraison = 0;
        } else {
            $scope.fraisLivraisonLibelle = ShippingFactory.getShippingModeSelected().frais;
            $scope.fraisLivraison = BasketFactory.getFloatPrice(ShippingFactory.getShippingModeSelected().frais);
        }

        $scope.prixTotalTTC += parseFloat($scope.prixTotalHT);
        $scope.prixTotalTTC += parseFloat($scope.fraisLivraison);
        $scope.prixTotalTTC += parseFloat($scope.fraisTVA);
        $scope.prixTotalTTCFloat = BasketFactory.getFloatPrice($scope.prixTotalTTC);*/

    }]);