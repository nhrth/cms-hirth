module.exports = function(app){
	var usuarioController = app.controllers.usuarioController;

	app.route('/newUser')
		.post(usuarioController.newUser);
		
	app.route('/cadastroUsuario')
		.post(usuarioController.salvaUsuario);

	app.route('/loginUsuario')
		.post(usuarioController.findByUsername);

	app.route('/listUsers')
		.get(usuarioController.listUsers);
}