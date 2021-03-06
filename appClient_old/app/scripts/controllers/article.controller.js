'use strict';

angular
  .module('ArticleModule', [
    'ngRoute',
    'ArticleService',
    'BasketService'
  ])
  .controller('ArticleListCtrl', ['$scope', '$http', 'ArticleFactory', 'BasketFactory', function($scope, $http, ArticleFactory, BasketFactory) {

    $scope.articlesList = ArticleFactory.getArticles();
    $scope.articlesExistingTypes = ArticleFactory.getArticlesExistingTypes();

    $scope.addArticleInBasket = function(article) {
      BasketFactory.addArticleQuantity(article);
    };

  }]);
  
  
  
  
  
  


















  
  
  

    /**
     * Incrémente la quantité d'une ligne du panier
     * @param {*} basketLine 
     *
    $scope.upQuantity = function(basketLine) {
      if ($scope.basket.length === 0) {
        $scope.basket = [];
      }
      basketLine.quantite += 1;
    }

    /**
     * Décrémente la quantité d'une ligne du panier
     * @param {*} basketLine 
     *
    $scope.downQuantity = function(basketLine) {
      basketLine.quantite -= 1;
    }*/
  
  
  
  
  
  
  
  
  
  /*.controller('ArticleDetailsCtrl', function($scope, $http, $routeParams, ArticleFactory) {
    console.log($routeParams.articleid);
    var url = 'http://localhost:3000/article/' + $routeParams.articleid;
    $http.get(url).then(function(response) {
        $scope.article = response.data;
      });
  })*/