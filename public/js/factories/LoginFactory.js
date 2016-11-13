angular.module("cmshirth").factory('LoginFactory', function($http) {

    var _loginUsuario = function(usuario, senha) {
        return $http({
            method: 'POST',
            url: '/loginUsuario',
            data: {
                "usuario": usuario,
                "senha": senha
            },
            headers: { 'Content-Type': 'application/json' },
            responseType: 'json'
        })
    }

    return {
        loginUsuario: _loginUsuario
    }
});
