var Movie = require('../models/Movie')
var Promise = require('bluebird')

module.exports = {

	get: function(params){
		return new Promise(function(resolve,reject){
			Movie.find(params, function(err,movies){
				if(err){
					reject(err)
					return
				}
				resolve(movies)
			})
		})
	},
	getById: function(id){
		return new Promise(function(resolve,reject){
			Movie.findById(id, function(err,movie){
				if(err){
					reject(err)
					return
				}
				resolve(movie)
			})
		})
	},
	post: function(params){
		return new Promise(function(resolve,reject){
			Movie.create(params, function(err,movie){
				if(err){
					reject(err)
					return
				}
				resolve(movie)
			})
		})
	}

}



