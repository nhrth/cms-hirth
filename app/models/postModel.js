var mongoose = require('mongoose'),
Schema = mongoose.Schema;

module.exports = function() {

	var postSchema = mongoose.Schema({

		titlePost: {
			type: String,
			required: true
		},
		descriptionPost:{
			type: String,
			require: true
		},
		imagesPost: [{
			type: Schema.Types.ObjectId,
			ref: 'Image'
		}],
		urlPost: {
			type: String
		},
		statusPost: {
			type: Boolean,
			default: false
		},
		tagsPost: [{
			type: String
		}],
		creationDatePost: {
			type: String
		},
		modificationDatePost: {
			type: String
		},
		publicationDatePost: {
			type: String
		},
		userCreatePost: {
			type: Schema.Types.ObjectId,
			ref: 'Usuario'
		},
		menuPost: {
			type: Schema.Types.ObjectId,
			ref: 'MenuSite'
		}

	});

	return mongoose.model('Post', postSchema);
};