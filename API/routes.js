const express = require('express');
const Client = require('./models/Client');
const config = require('./config/db');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

    const apiRoutes = express.Router();

    apiRoutes.route('/').all(function(req,res){
        res.json({message:"Bienvenue sur l'API test",methode:req.method});
    });

    apiRoutes.post('/client',urlencodedParser,function(req,res){
            console.log(req.body);
            const client = new Client({
            nom: req.body.nom,
            prenom: req.body.prenom
        });
            client.save(function(err,response){
                if (err){
                    res.send(err);
                    console.log(err)
                }
                res.json({response});
                console.log('Client stocké' + response)
            })
        });

    apiRoutes.get('/client',function(req,res){
            Client.find({}).then((response)=>{
                return res.json({response});
            })
        });

    apiRoutes.get('/client/:clientid',function(req,res){
        if(!req.params.clientid){
            return res.status(400).json({success:false,message:'Donne moi le client id'});
        }
        Client.findOne({'_id':req.params.clientid}).then((response) => {
            if(!response){
                return res.status(400).json({success:false,message:'Erreur, objet non trouvé en bd'});
            } else {
                return res.status(200).json({response});
            }
        })
    });

    var nomclient = "";

    apiRoutes.delete('/client/',urlencodedParser,function(req,res){
        if(!req.body.id){
            return res.status(400).json({success:false,message:'Donne moi le client id'});
        }
            return Client.findOne({'_id':req.body.id}).then((response) => {
                nomclient = response.nom;
                console.log(nomclient);
                 Client.deleteOne({'_id':req.body.id}).then((response) => {
                    if(!response){
                        return res.status(400).json({success:false,message:'Erreur, objet non trouvé en bd'})
                    } else {
                        return res.status(200).json({success:true,message:'Client ' + nomclient + ' supprimé'});
                    }
                })
       })

        
    })

    apiRoutes.put('/client',urlencodedParser,function(req,res){
        if(!req.body.id){
            return res.status(400).json({success:false,message:'Merci de passer l\id a modifié dans le body'});
        } else {
            Client.findOne({'_id':req.body.id}).then((response) => {
                if(!response){
                    return res.status(400).json({success:false,message:'L\id demandé n existe pas en base'});
                } else {
                    response.nom = req.body.nom
                    response.prenom = req.body.prenom,
                    response.save(function(err,result){
                        if (err) {
                            res.status(400).send(err);
                          }
                          res.status(200).json({success: true, result});
                    })
                }
            })
        }
    })

   app.use(apiRoutes);
}


