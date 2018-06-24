/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app.service('validationService', function ($http, config) {


    this.getToValidateCommands = function () {

        var res = $http.get(config.templatePath + 'validCommands');
        return res;
    };

    this.getCommandDetails = function (id) {
        var res = $http.get(config.templatePath + 'article/commande/' + id);
        return res;
    };

    this.getClientDetails = function (id) {
        var res = $http.get(config.templatePath + 'client/commande/' + id);
        return res;
    };

    this.validerCommande = function (id) {
        var res = $http.put(config.templatePath + 'majCommands', {etatCommande: 'Attribuée', idCommande: id});
        return res;
    };

    this.supprimerCommande = function (id) {
        var res = $http.delete(config.templatePath + 'deleteCommand', {idCommande: id});
        return res;
    };

});