angular.module("cmshirth").factory('Authentication', function(Base64, $http, $cookieStore, $rootScope, $timeout, LoginFactory) {

    var service = {};

    service.login = function(username, password, callback) {
        $timeout(function() {
            LoginFactory.loginUsuario(username, password)
                .then(function(response) {
                    //console.log("Usuário encontrado!");
                    //console.log(response.data);
                    callback(response.data);
                }, function(error) {
                    console.log("Usuário ou senha incorretos");
                    console.log(error);
                    callback(error);
                });
        }, 1000);
    };

    service.setCredentials = function(username, password) {
        var authdata = Base64.encode(username + ':' + password);
        $rootScope.globals = {
            currentUser: {
                username: username,
                authdata: authdata
            }
        };

        $http.defaults.headers.common['Authorization'] = 'Basic' + authdata;
        $cookieStore.put('globals', $rootScope.globals);
    };

    service.clearCredentials = function() {
        $rootScope.globals = {};
        $cookieStore.remove('globals');
        $http.defaults.headers.common;
    };

    return service;
});
