//import de mongoose
const mongoose = require('mongoose');
const routes = require('../server');

const Livreur = mongoose.Schema({
    nom: String,
    prenom: String,
    statut: String,
    statut: Number,
    email: String
});

module.exports = mongoose.model('Livreur',Livreur);