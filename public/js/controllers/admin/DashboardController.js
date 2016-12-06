angular.module('cmshirth').controller('DashboardController',
    function($scope, $location, UsuarioService, $cookieStore, Authentication) {

    	$scope.usuarioLogado = $cookieStore.get('globals');
    	//console.log($scope.usuarioLogado);

    });
