//import de mongoose
const mongoose = require('mongoose');
const routes = require('../server');

const Commande = mongoose.Schema({
    date: Date,
    description: String,
    estPaye: Boolean
});

module.exports = mongoose.model('Commande',Commande);