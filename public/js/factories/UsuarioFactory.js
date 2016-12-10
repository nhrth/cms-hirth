angular.module('cmshirth').factory('UsuarioFactory', function($http){

	var _saveUser = function(user){
		return $http.post('/newUser', user);
	}

	var _saveUserLogin = function(user){
		return $http.post('/cadastroUsuario', user);
	}

	var _listUsers = function(){
		return $http.get('/listUsers');
	}

	var _editUser = function(idUser){
		return $http.get('/user/' + idUser);
	}

	var _deleteUser = function(idUser){
		return $http.delete('/user/' + idUser);
	}

	return {
		saveUser: _saveUser,
		saveUserLogin: _saveUserLogin,
		listUsers: _listUsers,
		editUser: _editUser,
		deleteUser: _deleteUser
	}
});