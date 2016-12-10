angular.module('cmshirth').controller('ConfigUsuariosController',
    function($scope, UsuarioFactory, $location) {

        listUsers();

        function listUsers() {
            UsuarioFactory.listUsers()
                .then(function(users) {
                    $scope.users = users.data;
                }, function(error) {
                    $scope.message = error;
                    console.log(error);
                });
        }

        $scope.newUser = function() {
            $location.path("/newUser");
        }

        $scope.deleteUser = function(user) {
            $scope.titulo = "Deletar Usuário";
            $scope.mensagem = "Tem certeza que deseja deletar o usuário " + user.name + "?";
            $scope.userDelete = user._id;
            $("#modal-delete-user").modal("show");
        }
        
        $("#yes-button").click(function() {
            UsuarioFactory.deleteUser($scope.userDelete)
                .then(function(response) {
                    $scope.titulo = "Sucesso";
                    $scope.mensagem = response.data.message;
                    $("#modal-delete-user").modal("hide");
                    $("#modal-success-delete-user").modal("show");
                }, function(error) {
                    console.log("Erro ao deletar usuário");
                });
        });

        $("#ok-button").click(function() {
            $("#modal-success-delete-user").modal("hide");
            listUsers();
        });

    });
