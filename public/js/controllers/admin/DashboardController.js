angular.module('cmshirth').controller('DashboardController',
    function($scope, $location, UsuarioService, $cookieStore) {

    	$scope.telaLogin = function(){
    		$location.path('login');
    	}

    	$scope.usuarioLogado = $cookieStore.get('globals');
    	console.log($scope.usuarioLogado);

    });
