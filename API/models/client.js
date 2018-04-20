//import de mongoose
const mongoose = require('mongoose');
const routes = require('../server');

//definition du schéma
const Client = mongoose.Schema({
    nom: String,
    prenom: String
});

module.exports = mongoose.model('Client',Client);
