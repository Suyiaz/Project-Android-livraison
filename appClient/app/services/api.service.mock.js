'use strict';

angular.module('APIMock')
    .factory('ShippingFactory', function($cookies) {
        var shippingMode = [
            {idModeLivraison: 1, libelle: "Aucun", description: "Je viens chercher ma commande", frais: "Gratuit", faIcon: "fa fa-street-view", selected: false},
            {idModeLivraison: 2, libelle: "Livraison", description: "Je me fais livrer à l'adresse suivante", frais: "3.50 €", faIcon: "fa fa-motorcycle", selected: false}
        ];
        var shippingModeSelected = null;
        var shippingService = {};

        shippingService.getShippingModes = function() {
            return shippingMode;
        };

        shippingService.selectShippingMode = function(shippingMode) {
            shippingModeSelected = shippingMode;
            $cookies.putObject('ecShippingModeSelected', shippingMode);
        };

        shippingService.getShippingModeSelected = function() {
            if ($cookies.getObject('ecShippingModeSelected') !== undefined) {
                shippingModeSelected = $cookies.getObject('ecShippingModeSelected');
            }
            return shippingModeSelected;
        };

        return shippingService;

    })
    .factory('BasketFactory', function($cookies) {

        var basket = [];
        var basketService = {};

        basketService.addArticleQuantity = function(article) {
            var articleIndex = basket.findIndex(basketItem => basketItem.idArticle === article.idArticle);

            // Si panier vide ou article inexistant dans panier
            if (basket.length === 0 || (articleIndex === -1)) {
                var basketLine = {};

                // Caractéristiques d'une ligne du panier
                basketLine.idArticle = article.idArticle;
                basketLine.libelle = article.libelle;
                basketLine.description = article.description;
                basketLine.prixHT = article.prixHT;
                basketLine.taux = article.taux;
                basketLine.quantite = 1;

                basket.push(basketLine);
            } else {
                // Incrémentation de la quantité
                basketService.upQuantity(basket[articleIndex]);
            }
            $cookies.putObject('ecPanier', basket);
        };

        basketService.removeArticle = function(articleIndex) {
            basket.splice(articleIndex, 1);
        }

        basketService.removeArticleQuantity = function(article) {
            var articleIndex = basket.findIndex(basketItem => basketItem.idArticle === article.idArticle);

            // Si article existe dans le panier
            if (articleIndex !== -1) {

                // Si quantité >= 1
                if (basket[articleIndex].quantite >= 2) {
                    basketService.downQuantity(basket[articleIndex]);
                } else {
                    this.removeArticle(articleIndex);
                }
            }
            $cookies.putObject('ecPanier', basket);
        }

        basketService.getBasketContent = function() {
            //$cookies.remove('ecPanier');
            if ($cookies.getObject('ecPanier') !== undefined) {
                basket = $cookies.getObject('ecPanier');
            }
            return basket;
        };

        basketService.upQuantity = function(basketLine) {
            basketLine.quantite += 1;
        };

        basketService.downQuantity = function(basketLine) {
            basketLine.quantite -= 1;
        };

        basketService.getFloatPrice = function(prix) {
          return parseFloat(prix).toFixed(2);
        };
    
        basketService.getPricePrecision = function(number, precision) {
          var factor = Math.pow(Number.parseFloat(10), precision);
          return Math.round(number * factor) / factor;
        };

        return basketService;

    })

    .factory('ArticleFactory', function($http, config) {

        var articleService = {};
        
        articleService.getArticles = function() {
            var url = config.dataPath + 'articles';
            console.log(url);
            return $http.get(url);
        };

        return articleService;

    });