angular
    .module('ecNavbar', [])
    .directive('ecNavbar', function() {
        return {
            restrict: 'E',
            templateUrl: 'navbar/navbar.template.html',
            css: 'navbar/navbar.style.css'
        };
    })
    .controller('navbarCtrl', ['$scope', 'BasketFactory', function($scope, BasketFactory) {
        $scope.nbArticlesPanier = BasketFactory.getBasketContent().length;
    }]);