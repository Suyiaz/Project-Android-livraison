//import de mongoose
const mongoose = require('mongoose');
const routes = require('../server');

const Ingredients = mongoose.Schema({
    nom: String,
    allergene: String
});

module.exports = mongoose.model('Ingredients',Ingredients);