'use strict';

angular.module('BasketService', ['ngCookies'])
    .factory('BasketFactory', function($cookies, ShippingFactory) {

        var basket = [];
        var basketService = {};

        basketService.addArticleQuantity = function(article) {
            var articleIndex = basket.findIndex(basketItem => basketItem.idArticle === article.idArticle);

            // Si panier vide ou article inexistant dans panier
            if (basket.length === 0 || (articleIndex === -1)) {
                var basketLine = {};

                basketLine.idArticle = article.idArticle;
                basketLine.label = article.label;
                basketLine.description = article.description;
                basketLine.articleType = article.articleType;
                basketLine.unitPriceExcludingTax = article.unitPriceExcludingTax;
                basketLine.unitPriceExcludingTaxFloatFormat = article.unitPriceExcludingTaxFloatFormat;
                basketLine.vatRate = article.vatRate;
                basketLine.quantity = 1;

                basket.push(basketLine);
            } else {
                // Incrémentation de la quantité
                basketService.upQuantity(basket[articleIndex]);
            }
            $cookies.putObject('ecPanier', basket);
        };

        basketService.removeArticle = function(articleIndex, forceDelete = false) {
            basket.splice(articleIndex, 1);

            if (forceDelete) {
                $cookies.putObject('ecPanier', basket);
            }
        }

        basketService.removeArticleQuantity = function(article) {
            var articleIndex = basket.findIndex(basketItem => basketItem.idArticle === article.idArticle);

            // Si article existe dans le panier
            if (articleIndex !== (-1)) {

                // Si quantité >= 2
                if (basket[articleIndex].quantity >= 2) {
                    basketService.downQuantity(basket[articleIndex]);
                } else {
                    basketService.removeArticle(articleIndex);
                }
            }
            $cookies.putObject('ecPanier', basket);
        }

        basketService.getBasketContent = function() {
            //$cookies.remove('ecPanier');
            //$cookies.remove('ecShippingModeSelected');
            if ($cookies.getObject('ecPanier') !== undefined) {
                basket = $cookies.getObject('ecPanier');
            }
            return basket;
        };

        basketService.upQuantity = function(basketLine) {
            basketLine.quantity += 1;
        };

        basketService.downQuantity = function(basketLine) {
            basketLine.quantity -= 1;
        };

        basketService.getFloatPrice = function(price) {
          return parseFloat(price).toFixed(2);
        };
    
        basketService.getPricePrecision = function(number, precision) {
          var factor = Math.pow(Number.parseFloat(10), precision);
          return Math.round(number * factor) / factor;
        };

        basketService.getBasketArticlesQuantity = function() {
            return basketService.getBasketContent().length;
        };

        basketService.calculateBasketCheck = function(basketArticlesList, isIncludingTaxRequired = false) {
            var basketCheck = {};
            basketCheck.basketArticlesList = basketArticlesList;

            if (isIncludingTaxRequired) {
                basketCheck.vatPrice = 0;
            }

            basketCheck.totalBasketCheckPriceExcludingTax = 0;
            basketCheck.basketArticlesList.forEach(element => {
                element.totalPriceExcludingTax = element.quantity * element.unitPriceExcludingTax;
                element.totalPriceExcludingTaxFloatFormat = basketService.getFloatPrice(element.totalPriceExcludingTax);

                if (isIncludingTaxRequired) {
                    element.lineVatPrice = (element.totalPriceExcludingTax / 100 * element.vatRate);
                    basketCheck.vatPrice += element.lineVatPrice;
                }

                basketCheck.totalBasketCheckPriceExcludingTax += element.totalPriceExcludingTax;
            });
            basketCheck.totalBasketCheckPriceExcludingTaxFloatFormat = basketService.getFloatPrice(basketCheck.totalBasketCheckPriceExcludingTax);

            if (isIncludingTaxRequired) {
                // Frais de TVA
                basketCheck.vatPriceFloatFormat = basketService.getFloatPrice(basketCheck.vatPrice);

                // Frais de livraison
                var shippingModeSelected = ShippingFactory.getShippingModeSelected();
                if (shippingModeSelected.frais === "Gratuit") {
                    basketCheck.shippingPriceLabel = shippingModeSelected.frais;
                    basketCheck.shippingPrice = 0;
                } else {
                    basketCheck.shippingPriceLabel = shippingModeSelected.frais;
                    basketCheck.shippingPrice = basketService.getFloatPrice(shippingModeSelected.frais);
                }

                // Prix total TTC de la commande
                basketCheck.totalBasketCheckPriceIncludingTax = 0;
                basketCheck.totalBasketCheckPriceIncludingTax += parseFloat(basketCheck.vatPrice);
                basketCheck.totalBasketCheckPriceIncludingTax += parseFloat(basketCheck.totalBasketCheckPriceExcludingTax);
                basketCheck.totalBasketCheckPriceIncludingTax += parseFloat(basketCheck.shippingPrice);
                basketCheck.totalBasketCheckPriceIncludingTaxFloatFormat = basketService.getFloatPrice(basketCheck.totalBasketCheckPriceIncludingTax);
            }

            return basketCheck;
        };

        return basketService;

    });