var mongoose = require('mongoose');

mongoose.Promise = global.Promise;//setup mongoos to use promise
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};