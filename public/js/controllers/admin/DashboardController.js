angular.module('cmshirth').controller('DashboardController',
    function($scope, $location, UsuarioService, $cookieStore, Authentication) {

    	$scope.logout = function(){
    		Authentication.clearCredentials();
    		$location.path('login');
    	}

    	$scope.usuarioLogado = $cookieStore.get('globals');
    	console.log($scope.usuarioLogado);

    });
