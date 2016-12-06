angular.module("cmshirth").factory('LoginFactory', function($http) {

    var _loginUsuario = function(usuario, senha) {
        var currentDate = new Date();

        return $http({
            method: 'POST',
            url: '/loginUsuario',
            data: {
                "username": usuario,
                "password": senha,
                "currentDate": currentDate
            },
            headers: { 'Content-Type': 'application/json' },
            responseType: 'json'
        });
    }

    return {
        loginUsuario: _loginUsuario
    }
});
