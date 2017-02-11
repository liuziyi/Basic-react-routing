var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
	id: {type:Number, default:''},
	title: {type:String, default:''},
	year: {type:String, default:''}
});

module.exports = mongoose.model('movies', MovieSchema)