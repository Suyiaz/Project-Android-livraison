/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.component('inscription', {
    controllerAs: 'inscriptionCtrl',
    templateUrl: "views/inscription.html",
    controller: function (APIService) {
        console.log("hello");

        this.printData = function () {
            APIService.addClient(this.lastName,this.firstName,this.email,this.phoneNumber,this.addressLabel,this.codePostal,this.city).then(function (response) {
               console.log(response.data);
            });
            console.log(this.codePostal);
        }
    }
});

