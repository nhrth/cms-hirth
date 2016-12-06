angular.module('cmshirth').controller('NewUserController',
    function($scope, $cookieStore, $location, UsuarioFactory) {

        $scope.usuarioLogado = $cookieStore.get('globals');

        $scope.saveUser = function(user) {
            UsuarioFactory.saveUser(user)
                .then(function() {
                    $location.path("configUsuarios");
                }, function(error) {
                    $scope.titulo = "Erro";
                    $scope.mensagem = "Não foi possível salvar. Motivo: " + error.data.errmsg;
                    console.log(error);
                    $("#modal-new-user").modal('show');
                });
        }

        $scope.cancel = function() {
            $location.path("configUsuarios");
        }
    });
