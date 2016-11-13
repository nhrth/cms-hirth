module.exports = function(app){
	var usuarioController = app.controllers.usuarioController;

	app.route('/cadastroUsuario')
		.post(usuarioController.salvaUsuario);

	app.route('/loginUsuario')
		.post(usuarioController.findByUsername);
}