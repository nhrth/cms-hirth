angular.module('cmshirth').controller('ConfigUsuariosController',
    function($scope, $cookieStore, UsuarioFactory, $location) {

    	$scope.usuarioLogado = $cookieStore.get('globals');
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

        $scope.newUser = function(){
            $location.path("/newUser");
        }

    });
