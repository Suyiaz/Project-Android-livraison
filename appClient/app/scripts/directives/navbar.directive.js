angular
    .module('ecNavbar', [])
    .directive('ecNavbar', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/navbar.template.html',
            css: 'styles/navbar.style.css'
        };
    })
    .controller('navbarCtrl', ['$scope', 'BasketFactory', function($scope, BasketFactory) {

        // Nombre d'articles que contient le panier
        $scope.basketArticlesQuantity = BasketFactory.getBasketArticlesQuantity();
    
    }]);