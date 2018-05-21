'use strict';

// Declare app level module which depends on views, and components
angular
    .module('myApp', [
        'ngRoute',
        'ecNavbar',
        'ecFooter',
        'angularCSS',
        'APIMock',
        'article',
        'panier',
        'livraison',
        'confirmationCommande'
    ])
    .constant('config', {
        dataPath: 'http://localhost:3000/'
    })
    .config(['$locationProvider', '$routeProvider', '$qProvider',
        function config($locationProvider, $routeProvider, $qProvider) {
                $qProvider.errorOnUnhandledRejections(false);
                $locationProvider.hashPrefix('!');

                $routeProvider
                .when("/", {
                        templateUrl: "accueil/accueil.template.html",
                        css: "accueil/accueil.style.css"
                })
                .when("/accueil", {
                        templateUrl: "accueil/accueil.template.html",
                        css: "accueil/accueil.style.css"
                })
                .when("/articles", {
                        controller: 'ArticleListCtrl',
                        templateUrl: "article/article.template.html",
                        css: "article/article.style.css"
                })
                /*.when("/article/:articleid", {
                        controller: 'ArticleDetailsCtrl',
                        templateUrl: "article/article.template.html",
                        css: "article/article.style.css"
                })*/
                .when("/panier", {
                        controller: 'PanierCtrl',
                        templateUrl: "panier/panier.template.html",
                        css: "panier/panier.style.css"
                })
                .when("/livraison", {
                        controller: 'LivraisonCtrl',
                        templateUrl: "livraison/livraison.template.html",
                        css: "livraison/livraison.style.css"
                })
                .when("/confirmation", {
                        controller: 'ConfirmationCommandeCtrl',
                        templateUrl: "confirmation-commande/confirmation-commande.template.html",
                        css: "confirmation-commande/confirmation-commande.style.css"
                });
        }
    ]);
