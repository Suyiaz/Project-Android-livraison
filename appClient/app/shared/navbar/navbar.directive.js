'use strict';

angular
    .module('ecNavbar', [])
    .directive('ecNavbar', function() {
        return {
            restrict: 'E',
            templateUrl: './app/shared/navbar/navbar.template.html',
            css: './assets/styles/navbar.style.css'
        };
    })
    .controller('navbarCtrl', ['$scope', 'BasketFactory', function($scope, BasketFactory) {

        // Nombre d'articles que contient le panier
        $scope.basketArticlesQuantity = BasketFactory.getBasketArticlesQuantity();
    
    }]);