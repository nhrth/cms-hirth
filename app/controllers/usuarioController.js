module.exports = function(app) {

    var Usuario = app.models.usuarioModel;
    var controller = {};

    controller.listaUsuarios = function(req, res) {
        Usuario.find().exec()
            .then(function(usuarios) {
                    res.json(usuarios);
                },
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro);
                });
    };

    controller.findByIdUsuario = function(req, res) {
        var _id = req.params.id;
        Usuario.findById(_id).exec()
            .then(function(usuario) {
                    if (!usuario)
                        throw new Error("Usuário não encontrado.");
                    res.json(usuario);
                },
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro);
                });
    };

    controller.salvaUsuario = function(req, res) {
        var _id = req.body._id;

        var dados = {
            "nome": req.body.nome,
            "email": req.body.email,
            "usuario": req.body.username,
            "senha": req.body.senha
        };

        if (_id) {
            Usuario.findByIdAndUpdate(_id, dados).exec()
                .then(function(usuario) {
                        res.json(usuario);
                    },
                    function(erro) {
                        console.log(erro);
                        res.status(500).json(erro);
                    });
        } else {
            Usuario.create(dados)
                .then(function(usuario) {
                        res.status(201).json(usuario);
                    },
                    function(erro) {
                        console.log(erro);
                        res.status(500).json(erro);
                    });
        }
    };

    controller.removeUsuario = function(req, res) {
        var _id = req.params.id;
        Usuario.remove({ "_id": _id }).exec()
            .then(function() {
                    res.status(204).end();
                },
                function(erro) {
                    return console.error(erro);
                });
    };

    controller.findByUsername = function(req, res){
        var usuario = req.body.usuario;
        var senha = req.body.senha;
        Usuario.find({'usuario': usuario, 'senha': senha}).exec()
        .then(function(usuario){
            console.log(usuario);
            res.json(usuario);
        }, function(error){
            return console.log(error);
        });
    }

    return controller;
}
