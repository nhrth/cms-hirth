var multer = require('multer');

var uploading = multer({
	dest: '../public/uploads',
	limits: {fileSize: 1000000, files: 1}
});

module.exports = function(app){

	var imageController = app.controllers.imageController;

	app.route('/upload')
		.post(imageController.uploadImage);
		
}