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
        database: 'Test'
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
        connection.query('INSERT INTO client SET nom = ?, prenom = ?',[pNom,pPrenom], function (error, results, fields) {
            if (error) {
                throw error;
            }
            return res.status(200).json({success:true,message:'Client ajouté'});
        });
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

    var nomclient = "";

    apiRoutes.delete('/client/',urlencodedParser,function(req,res){
        /*if(!req.body.id){
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
       })        */
    })

    apiRoutes.put('/client',urlencodedParser,function(req,res){
        /*if(!req.body.id){
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
        }*/
    })
    //fin routes client

    
    //Routes articles
    apiRoutes.get('/articles',function(req,res){
        /*Article.find({}).then((response)=>{
            return res.json({response});
        })*/
    });

    apiRoutes.post('/articles',urlencodedParser,function(req,res){
        /*const article = new Article({
            libelle: req.body.libelle,
            description: req.body.description,
            prix: req.body.prix,
            type: req.body.type
        });

        article.save(function(err,response){
            if (err) {
                res.send(err)
                console.log(err)
            }
            res.json({response});
            console.log('Article stocké ' + response);
        })*/

    //fin routes Articles
    })

    //routes typeArticles
    apiRoutes.get('/typeArticles',urlencodedParser,function(req,res){
       /* TypeArticle.find({}).then((response)=>{
            return res.json({response});
        })*/
    })

    apiRoutes.post('/typeArticles',urlencodedParser,function(req,res){
       /* const typeArticle = new TypeArticle({
            idType: req.body.idType,
            nom: req.body.nom
        });
        typeArticle.save(function(err,response){
            if (err){
                res.send(err);
                console.log(err)
            }
            res.json({response});
            console.log('Type Article stocké ' + response);
        })*/
    })

   app.use(apiRoutes);
}


