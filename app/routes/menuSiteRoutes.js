module.exports = function(app){
	var menuSiteController = app.controllers.menuSiteController;

	app.route('/newMenuSite')
		.post(menuSiteController.newMenuSite);
		
	app.route('/listMenuSites')
		.get(menuSiteController.listMenuSites);

	app.route('/listMenuSitesName')
		.get(menuSiteController.listMenuSitesName);

	app.route('/menuSite/:id')
		.get(menuSiteController.findByIdMenuSite)
		.delete(menuSiteController.deleteMenuSite);

	app.route('/activeMenuSite/:id')
		.put(menuSiteController.activeMenuSite);

	app.route('/inactiveMenuSite/:id')
		.put(menuSiteController.inactiveMenuSite);
}