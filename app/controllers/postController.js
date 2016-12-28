module.exports = function(app) {

    var Post = app.models.postModel;
    var controller = [];

    controller.listPosts = function(req, res) {
        Post.find().populate('userCreatePost menuPost').exec()
            .then(function(posts) {
                    res.json(posts);
                },
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro);
                });
    };

    controller.savePost = function(req, res) {
        var _id = req.body._id;
        var date = new Date();
        var currentDateFormat = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();

        if (_id) { //Edição        	
            var dados = {
                "titlePost": req.body.titlePost,
                "descriptionPost": req.body.descriptionPost,
                "imagesPost": [req.body.imagesPost],
                "urlPost": req.body.urlPost,
                "statusPost": true,
                "tagsPost": [req.body.tagsPost],
                "modificationDatePost": currentDateFormat,
                "userCreatePost": req.body.userCreatePost,
                "menuPost": req.body.menuPost
            };
            Post.findByIdAndUpdate(_id, dados).exec()
                .then(function(post) {
                        res.json({
                            message: "Post atualizado com sucesso!",
                            response: post
                        });
                    },
                    function(erro) {
                        console.log(erro);
                        res.status(500).json(erro);
                    });
        } else { //Inserção
        	var dados = {
                "titlePost": req.body.titlePost,
                "imagesPost": [req.body.imagesPost],
                "urlPost": req.body.urlPost,
                "statusPost": true,
                "tagsPost": [req.body.tagsPost],
                "creationDatePost": currentDateFormat,
                "userCreatePost": req.body.userCreatePost,
                "menuPost": req.body.menuPost
            };
            Post.create(dados)
                .then(function(post) {
                        res.json({
                            message: "Post cadastrado com sucesso!",
                            response: post
                        });
                    },
                    function(erro) {
                        console.log(erro);
                        res.status(500).json(erro);
                    });
        }
    };

    controller.deletePost = function(req, res) {
    	
    };

    controller.findByIdPost = function(req, res) {
    	
    };

    controller.activePost = function(req, res) {
    	
    };

    controller.inactivePost = function(req, res) {
        
    };

    return controller;
}
