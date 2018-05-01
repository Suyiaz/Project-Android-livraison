//import de mongoose
const mongoose = require('mongoose');
const routes = require('../server');

const Boisson = mongoose.Schema({
    description: String
});

module.exports = mongoose.model('Boisson',Boisson);