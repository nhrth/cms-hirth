angular.module('cmshirth').controller('EditUserController',
    function($scope, UsuarioFactory, $location, $routeParams) {

        if ($routeParams.idUser) {
            var idUser = $routeParams.idUser;
            console.log(idUser);
            UsuarioFactory.editUser(idUser)
                .then(function(response) {
                    $scope.user = response.data;
                }, function(error) {

                });
        } else {
            $scope.contato = {};
        }

        $scope.saveUser = function(user) {
                console.log(user);
                UsuarioFactory.saveUser(user)
                    .then(function(response) {
                        $scope.titulo = "Sucesso";
                        $scope.mensagem = response.data.message;
                        $("#modal-edit-user").modal("show");
                    }, function(error) {
                        $scope.titulo = "Erro"
                        $scope.mensagem = "Não foi possível salvar. Motivo: " + error.data.errmsg;
                        console.log(error);
                    });
        }
        
        $scope.okButtonModal = function(){
            $("#modal-edit-user").modal("hide");
            $location.path("configUsuarios");
        }
    });
