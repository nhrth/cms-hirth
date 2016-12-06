angular.module('cmshirth').controller('MenuController',
    function($scope, $location, Authentication) {
    	$scope.userConfiguration = function(){
    		$location.path("configUsuarios");
    	}

    	$scope.logout = function(){
    		Authentication.clearCredentials();
    		$location.path('login');
    	}
    });
