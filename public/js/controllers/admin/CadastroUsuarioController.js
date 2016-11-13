angular.module('cmshirth').controller('CadastroUsuarioController',
    function($scope, UsuarioFactory, UsuarioService, $location) {

        $scope.salvarUsuario = function(usuario) {
            console.log(usuario);
            UsuarioFactory.saveUsuario(usuario)
                .then(function() {
                    UsuarioService.setUsuario(usuario);
                    console.log(UsuarioService.getUsuario());
                    //$scope.titulo = "Novo Usuário";
                    //$scope.mensagem = "Usuário salvo com sucesso!";
                    $location.path("dashboard");                    
                }, function(error) {
                    $scope.titulo = "Erro"
                    $scope.mensagem = "Não foi possível salvar. Motivo: " + error.data.errmsg;
                    console.log(error);
                });
        }

        function limpaUsuario(usuario) {
            usuario.nome = "";
            usuario.email = "";
            usuario.username = "";
            usuario.senha = "";
            usuario.senha2 = "";
            console.log(usuario);
        }

    });
