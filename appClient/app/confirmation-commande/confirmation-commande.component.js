'use strict';

angular
    .module('confirmationCommande')
    .controller('ConfirmationCommandeCtrl', ['$scope', 'BasketFactory', 'ShippingFactory', function($scope, BasketFactory, ShippingFactory) {

        $scope.produitsPanier = BasketFactory.getBasketContent();
        
        $scope.prixTotalHT = 0;
        $scope.prixTotalHTFloat = '';
        $scope.fraisLivraisonLibelle = '';
        $scope.fraisLivraison = 0;
        $scope.fraisTVA = 0;
        $scope.fraisTVAFloat = '';
        $scope.prixTotalTTC = 0;
        $scope.prixTotalTTCFloat = '';

        $scope.produitsPanier.forEach(element => {
            // Prix unitaire HT en Float - Format '1.00'
            element.prixHTFloat = BasketFactory.getFloatPrice(element.prixHT);
    
            // Prix total HT par ligne
            element.prixTotalLigne = (element.prixHT * element.quantite);
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
        $scope.prixTotalTTCFloat = BasketFactory.getFloatPrice($scope.prixTotalTTC);

    }]);