//import de mongoose
const mongoose = require('mongoose');
const routes = require('../server');

const TypeArticle = mongoose.Schema({
    nom: String
});

module.exports = mongoose.model('TypeArticle',TypeArticle);