var mongoose = require('mongoose'),
Schema = mongoose.Schema;

module.exports = function() {

	var imageSchema = mongoose.Schema({

		titleImage: {
			type: String
		},
		descriptionImage: {
			type: String
		},
		urlImage: {
			type: String
		}
		
	});

	return mongoose.model('Image', imageSchema);
};