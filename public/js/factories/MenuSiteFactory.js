angular.module('cmshirth').factory('MenuSiteFactory', function($http){

	var _saveMenuSite = function(menuSite){
		return $http.post('/newMenuSite', menuSite);
	}

	var _listMenuSites = function(){
		return $http.get('/listMenuSites');
	}	

	var _listMenuSitesName = function(){
		return $http.get('/listMenuSitesName');
	}

	var _editMenuSite = function(idMenuSite){
		return $http.get('/menuSite/' + idMenuSite);
	}

	var _deleteMenuSite = function(idMenuSite){
		return $http.delete('/menuSite/' + idMenuSite);
	}

	var _activeMenuSite = function(idMenuSite){
		return $http.put('/activeMenuSite/' + idMenuSite);
	}

	var _inactiveMenuSite = function(idMenuSite){
		return $http.put('/inactiveMenuSite/' + idMenuSite);
	}

	return {
		saveMenuSite: _saveMenuSite,
		listMenuSites: _listMenuSites,
		listMenuSitesName: _listMenuSitesName,
		editMenuSite: _editMenuSite,
		deleteMenuSite: _deleteMenuSite,
		activeMenuSite: _activeMenuSite,
		inactiveMenuSite: _inactiveMenuSite
	}
});