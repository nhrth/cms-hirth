angular.module('cmshirth').controller('MenuController',
    function($scope, $location, $cookieStore, Authentication) {

    	$scope.usuarioLogado = $cookieStore.get('globals');

    	$scope.userConfiguration = function(){
    		$location.path("configUsuarios");
    	}

    	$scope.logout = function(){
    		Authentication.clearCredentials();
    		$location.path('login');
    	}

        $('[data-toggle="tooltip"]').tooltip(); 
    });
