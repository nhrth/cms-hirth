angular.module('cmshirth').factory('UsuarioFactory', function($http){

	var _saveUsuario = function(usuario){
		return $http.post('/cadastroUsuario', usuario);
	}

	return {
		saveUsuario: _saveUsuario
	}
});