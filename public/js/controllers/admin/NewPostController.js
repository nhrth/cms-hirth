angular.module('cmshirth').controller('NewPostController',
    function($scope, PostFactory, fileReader) {

    	$scope.savePost = function(post){
    		PostFactory.savePost(post)
    			.then(function(reponse){

    			}, function(error){

    			});
    	}

    });