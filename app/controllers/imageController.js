module.exports = function(app) {

	var Image = app.models.imageModel;
	var controller = [];

	controller.uploadImage = function(req, res){

		var dados = {
			"titleImage" : "Teste Imagem",
			"descriptionImage": "Teste Descrição",
			"url_image": req.body.imagesPost
		};

		Image.create(dados)
			.then(function(response){
				res.json(response);
			}, function(error){
				console.log("ERROOOOOOOO!!!");
			});
	};

	return controller;
}