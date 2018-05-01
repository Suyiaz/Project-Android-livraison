//import de mongoose
const mongoose = require('mongoose');
const routes = require('../server');

const Pizza = mongoose.Schema({
    description: String,
    prix: Number,
    taille: String,
    imageURL: String
});

module.exports = mongoose.model('Pizza',Pizza);