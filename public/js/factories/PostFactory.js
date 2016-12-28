angular.module('cmshirth').factory('PostFactory', function($http) {

	var _listPosts = function(){
		return $http.get('/listPosts');
	}

	var _savePost = function(post){
		return $http.post('/savePost', post);
	}

	var _editPost = function(idPost){
		return $http.get('/post/' + idPost);
	}

	var _deletePost = function(idPost){
		return $http.delete('/post/' + idPost);
	}

	var _activePost = function(idPost){
		return $http.put('/activePost/' + idPost);
	}

	var _inactivePost = function(idPost){
		return $http.put('/inactivePost/' + idPost);
	}

	return {
		listPosts: _listPosts,
		savePost: _savePost,		
		editPost: _editPost,
		deletePost: _deletePost,
		activePost: _activePost,
		inactivePost: _inactivePost
	}

});
