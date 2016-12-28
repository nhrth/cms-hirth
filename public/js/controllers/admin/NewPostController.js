angular.module('cmshirth').controller('NewPostController',
    function($scope, PostFactory, FileUploader) {

    	var uploader = $scope.uploader = new FileUploader({
    		url: '/upload',
    		queueLimit: 5
    	});

    	uploader.onCompleteAll = function(){
    		alert("Upload Completo!");
    		uploader.clearQueue();
    	}



    	$scope.savePost = function(post){
    		PostFactory.savePost(post)
    			.then(function(reponse){
    				$scope.titulo = "Sucesso";
    				$scope.mensagem = response.message;
    			}, function(error){

    			});
    	}

    });