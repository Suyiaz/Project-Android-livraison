app.service('APIService', function ($http, config) {
   
        this.addClient= function (nom,prenom,email,numTel,addresseFacturation,codePostal,ville,motDePasse) {
            var res = $http.post(config.templatePath + 'Client', {data:{nom: nom,
                prenom:prenom,
                email:email,
                numTel:numTel,
                addresseFacturation:addresseFacturation,
                codePostal:codePostal,
                ville:ville,
                motDePasse:motDePasse},
                headers:{'Content-Type': 'application/x-www-form-urlencoded'}
            });
            return res;


        }
        

});

