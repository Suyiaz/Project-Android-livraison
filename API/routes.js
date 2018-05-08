const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');


const urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    var connection = mysql.createConnection({
        connectionLimit: 50,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'pizzatologue'
    });

    //connect to mysql
    connection.connect(function(error){
        if(!!error){
            console.log('Error');
        }
        else {
            console.log('Connected');
        }
    })
    const apiRoutes = express.Router();

    //Routes pour client
    apiRoutes.route('/').all(function(req,res){
        res.json({message:"Bienvenue sur l'API test",methode:req.method});
    });


    apiRoutes.post('/client',urlencodedParser,function(req,res){        
        var pNom = req.body.nom;
        var pPrenom = req.body.prenom;
        console.log(req.body);
        /*connection.query('INSERT INTO client SET nom = ?, prenom = ?',[pNom,pPrenom], function (error, results, fields) {
            if (error) {
                throw error;
            }
            return res.status(200).json({success:true,message:'Client ajouté'});
        });*/
    });


    apiRoutes.get('/client',function(req,res){
        connection.query('SELECT * from client', function (error, results, fields) {
            if (error) {
                throw error;
            }
            return res.json(results);
        });  
    });

    apiRoutes.get('/client/:clientid',function(req,res){
        if(!req.params.clientid){
            return res.status(400).json({success:false,message:'Client id necessaire'});
        }
        connection.query('SELECT * FROM client c WHERE c.idClient = ?',[req.params.clientid], function (error, results, fields) {
            if (error) {
                throw error;
            }
            return res.json(results);
        }); 
    });


    apiRoutes.delete('/client/',urlencodedParser,function(req,res){})



    apiRoutes.put('/client',urlencodedParser,function(req,res){})
    //fin routes client

    //début du traitement pour le renvoi des données pour le livreur
    apiRoutes.get('/tournee/:livreurid',function(req,res){
        if(!req.params.livreurid){
            return res.status(400).json({success:false,message:'Client id necessaire'});
        }
        connection.query('select c.*, al.adresse, al.codePostal, al.ville from livreur l join tournee t on t.idLivreur = l.idLivreur join commande c on c.idTournee = t.idTournee join adresselivraison al on al.idAdresseLivraison = c.idAdresseLivraison where l.idLivreur = ?',[req.params.livreurid], function (error, results, fields) {
            if (error) {
                throw error;
            }
            return res.json(results);
        }); 
    });
    
    //Routes articles
    apiRoutes.get('/articles',function(req,res){});

    apiRoutes.post('/articles',urlencodedParser,function(req,res){})

    //routes typeArticles
    apiRoutes.get('/typeArticles',urlencodedParser,function(req,res){})

    apiRoutes.post('/typeArticles',urlencodedParser,function(req,res){})

   app.use(apiRoutes);
}


