module.exports = function(app) {

    var MenuSite = app.models.menuSiteModel;
    var controller = [];

    controller.listMenuSites = function(req, res) {
        MenuSite.find({ "isSubmenu": false }).populate('submenus').exec()
            .then(function(menus) {
                    res.json(menus);
                },
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro);
                });
    };

    controller.listMenuSitesName = function(req, res) {
        MenuSite.find().select('titleMenu').exec()
            .then(function(menus) {
                    res.json(menus);
                },
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro);
                });
    };

    controller.newMenuSite = function(req, res) {
        var _id = req.body._id;
        var _parentIdMenu = req.body.idParentMenuSite;

        var dados = {
            "titleMenu": req.body.titleMenu,
            "submenus": [],
            "statusMenu": true,
            "urlMenu": req.body.urlMenu,
            "isSubmenu": req.body.isSubmenu,
            "orderMenu": req.body.orderMenu
        };

        if (_id) {
            MenuSite.findByIdAndUpdate(_id, dados).exec()
                .then(function(menu) {
                        //Caso o menu seja um submenu, efetua a ligação na coluna submenus do menu pai.
                        if (_parentIdMenu != null) {

                            MenuSite.update({ "_id": _parentIdMenu }, { $push: { "submenus": menu._id } }).exec()
                                .then(function(parentMenu) {
                                    res.json({
                                        message: "Submenu cadastrado com sucesso!",
                                        response: {
                                            parentMenu: parentMenu,
                                            childSubmenu: menu
                                        }
                                    });
                                }, function(error) {
                                    console.log(error);
                                    res.status(500).json(erro);
                                });
                        } else {
                            res.json({
                                message: "Menu cadastrado com sucesso!",
                                response: menu
                            });
                        }
                    },
                    function(erro) {
                        console.log(erro);
                        res.status(500).json(erro);
                    });
        } else {
            MenuSite.create(dados)
                .then(function(menu) {

                        //Caso o menu seja um submenu, efetua a ligação na coluna submenus do menu pai.
                        if (_parentIdMenu != null) {

                            MenuSite.update({ "_id": _parentIdMenu }, { $push: { "submenus": menu._id } }).exec()
                                .then(function(parentMenu) {
                                    res.json({
                                        message: "Submenu cadastrado com sucesso!",
                                        response: {
                                            parentMenu: parentMenu,
                                            childSubmenu: menu
                                        }
                                    });
                                }, function(error) {
                                    console.log(error);
                                    res.status(500).json(erro);
                                });
                        } else {
                            res.json({
                                message: "Menu cadastrado com sucesso!",
                                response: menu
                            });
                        }
                    },
                    function(erro) {
                        console.log(erro);
                        res.status(500).json(erro);
                    });
        }
    };

    controller.findByIdMenuSite = function(req, res) {
        var _id = req.params.id;
        MenuSite.findById(_id).exec()
            .then(function(menuSite) {
                    if (!menuSite)
                        throw new Error("Usuário não encontrado.");
                    res.json(menuSite);
                },
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro);
                });
    };

    controller.deleteMenuSite = function(req, res) {
        var _id = req.params.id;
        MenuSite.remove({ "_id": _id }).exec()
            .then(function() {
                    res.json({
                        message: "Menu deletado com sucesso."
                    });
                },
                function(erro) {
                    return console.error(erro);
                });
    };

    controller.activeMenuSite = function(req, res) {
        var _id = req.params.id;
        MenuSite.update({ "_id": _id }, { "statusMenu": true }).exec()
            .then(function() {
                res.json({
                    message: "Menu ativado com sucesso."
                });
            },function(error) {
                return console.error(erro);
            });
    };

    controller.inactiveMenuSite = function(req, res) {
        var _id = req.params.id;
        MenuSite.update({ "_id": _id }, { "statusMenu": false }).exec()
            .then(function() {
                res.json({
                    message: "Menu desativado com sucesso."
                });
            },function(error) {
                return console.error(erro);
            });
    }

    return controller;
};
