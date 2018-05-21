'use strict';

angular
    .module('livraison')
    .controller('LivraisonCtrl', ['$scope', 'ShippingFactory', function($scope, ShippingFactory) {

        $scope.modesLivraison = ShippingFactory.getShippingModes();
        $scope.modeLivraisonSelected = ShippingFactory.getShippingModeSelected();
        $scope.fraisTotalSupplementaires = 0;

        if ($scope.modeLivraisonSelected !== null) {
            $scope.fraisTotalSupplementaires = $scope.modeLivraisonSelected.frais;
        }

        $scope.selectModeLivraison = function(modeLivraison) {
            modeLivraison.selected = true;
            ShippingFactory.selectShippingMode(modeLivraison);
            $scope.modeLivraisonSelected = ShippingFactory.getShippingModeSelected();
            $scope.majInfos();
        };

        $scope.majInfos = function() {
            if ($scope.modeLivraisonSelected !== null) {
                $scope.fraisTotalSupplementaires = $scope.modeLivraisonSelected.frais;
            }
        }

    }]);