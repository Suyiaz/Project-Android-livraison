'use strict';

angular.module('ArticleService', ['ngCookies'])
    .factory('ArticleFactory', function($http, config, BasketFactory) {

        var articleService = {};
        
        articleService.getArticles = function() {
            
            var articlesList = [];
            var url = config.dataPath + 'articles';

            $http.get(url).then(function(response) {
                angular.extend(articlesList, articleService.matchEnglishNamesForVars(response.data));
            });

            return articlesList;
        };

        articleService.matchEnglishNamesForVars = function(articlesList) {

            var matchedArticlesList = [];
            var matchedElement;

            articlesList.forEach(element => {
                
                matchedElement = {};

                matchedElement.idArticle = element.idArticle;
                matchedElement.label = element.libelle;
                matchedElement.description = element.description;
                matchedElement.articleType = element.nom;
                matchedElement.unitPriceExcludingTax = element.prixHT;
                matchedElement.unitPriceExcludingTaxFloatFormat = BasketFactory.getFloatPrice(element.prixHT);
                matchedElement.vatRate = element.taux;
                
                matchedArticlesList.push(matchedElement);
            });

            return matchedArticlesList;
        };

        articleService.getArticlesExistingTypes = function() {
            return [{idType: 1, labelType: 'Plat', plurialLabelType: 'Plats'}, {idType: 2, labelType: 'Boisson', plurialLabelType: 'Boissons'}];
        }

        return articleService;

    });