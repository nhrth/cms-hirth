angular.module('cmshirth').controller('CadastroUsuarioController',
    function($scope, UsuarioFactory, UsuarioService, $location, Authentication) {

        $scope.saveUser = function(user) {
            console.log(user);
            UsuarioFactory.saveUserLogin(user)
                .then(function() {
                    UsuarioService.setUsuario(user);
                    Authentication.setCredentials(user.username, user.password);
                    $location.path("dashboard");                    
                }, function(error) {
                    $scope.titulo = "Erro"
                    $scope.mensagem = "Não foi possível salvar. Motivo: " + error.data.errmsg;
                    console.log(error);
                });
        }

        function limpaUsuario(user) {
            user.nome = "";
            user.email = "";
            user.username = "";
            user.senha = "";
            user.senha2 = "";
            console.log(user);
        }

    });
