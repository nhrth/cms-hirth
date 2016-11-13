angular.module('cmshirth').controller('LoginController',
    function($scope, $rootScope, $location, Authentication) {
        
        //reseta o status do login.
        Authentication.clearCredentials();

        //Função chamada quando o usuário clica no botão "Login" na tela de Login.
        $scope.login = function(usuario) {
            $scope.dataLoading = true;
            Authentication.login(usuario.username, usuario.senha, function(response) {
                console.log("Response");
                console.log(response);
                if (response != null) {
                    Authentication.setCredentials(usuario.username, usuario.senha);
                    $location.path("dashboard");
                } else {
                    $scope.error = response.message;    
                    $scope.dataLoading = false;
                }
            });
        };

        $scope.cadastroUsuario = function() {
            $location.path('cadastroUsuario');
        };

        $scope.forgotPassword = function() {
        };

    });
