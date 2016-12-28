angular.module('cmshirth').controller('PostController',
    function($scope, $location, PostFactory) {

    	listPosts();

    	function listPosts(){
    		PostFactory.listPosts()
    			.then(function(response){
                    $scope.posts = response.data;
    			}, function(error){
    				console.log(error);
                    alert(error);
    			});
    	};

        $scope.newPost = function(){
            $location.path("newPost");
        };	

    });
