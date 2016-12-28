module.exports = function(app) {

    var Usuario = app.models.usuarioModel;
    var controller = {};

    controller.listUsers = function(req, res) {
        Usuario.find().exec()
            .then(function(usuarios) {
                    res.json(usuarios);
                },
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro);
                });
    };

    controller.findByIdUser = function(req, res) {
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

    //Este método é chamado quando o usuário se cadastra no sistema.
    controller.salvaUsuario = function(req, res) {
        var _id = req.body._id;
        var date = new Date();
        var currentDateFormat = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " "
                                + date.getHours() + ":" + date.getMinutes();
        //console.log("Data Atual Formatada: " + currentDateFormat);

        var dados = {
            "name": req.body.name,
            "email": req.body.email,
            "username": req.body.username,
            "password": req.body.password,
            "creationDate": currentDateFormat,
            "lastAccess": currentDateFormat
        };

        if (_id) {
            Usuario.findByIdAndUpdate(_id, dados).exec()
                .then(function(user) {
                        res.json(user);
                    },
                    function(erro) {
                        console.log(erro);
                        res.status(500).json(erro);
                    });
        } else {
            Usuario.create(dados)
                .then(function(user) {
                        res.status(201).json(user);
                    },
                    function(erro) {
                        console.log(erro);
                        res.status(500).json(erro);
                    });
        }
    };

    //Este método é chamado quando o usuário cria outro usuário de dentro do sistema.
    controller.newUser = function(req, res) {
        var _id = req.body._id;
        var date = new Date();
        var currentDateFormat = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " "
                                + date.getHours() + ":" + date.getMinutes();
        //console.log("Data Atual Formatada: " + currentDateFormat);

        if (_id) {
            var dados = {
                "name": req.body.name,
                "email": req.body.email,
                "username": req.body.username,
                "password": req.body.password,
                "lastModification": currentDateFormat
            };
            Usuario.findByIdAndUpdate(_id, dados).exec()
                .then(function(user) {
                        res.json({
                            message: "Usuário atualizado com sucesso!",
                            user: user
                        });
                    },
                    function(erro) {
                        console.log(erro);
                        res.status(500).json(erro);
                    });
        } else {
            var dados = {
                "name": req.body.name,
                "email": req.body.email,
                "username": req.body.username,
                "password": req.body.password,
                "creationDate": currentDateFormat
            };
            Usuario.create(dados)
                .then(function(user) {
                        res.json({
                            message: "Usuário cadastrado com sucesso!",
                            user: user,
                            status: 201
                        });
                    },
                    function(erro) {
                        console.log(erro);
                        res.status(500).json(erro);
                    });
        }
    }

    controller.deleteUser = function(req, res) {
        var _id = req.params.id;
        Usuario.remove({ "_id": _id }).exec()
            .then(function() {
                    res.json({
                        message: "Usuário deletado com sucesso.",
                        status: 204
                    });
                },
                function(erro) {
                    return console.error(erro);
                });
    };

    controller.findByUsername = function(req, res) {
        var usuario = req.body.usuario;
        var senha = req.body.senha;
        var date = new Date();
        var currentDateFormat = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " "
                                + date.getHours() + ":" + date.getMinutes();
        //console.log("Data Back-end: " + req.body.currentDate);

        Usuario.find({ 'usuario': usuario, 'senha': senha }).exec()
            .then(function(usuario) {
                console.log("ID usuario: " + usuario[0]._id);
                if (usuario.length > 0) {
                    Usuario.update({ _id: usuario[0]._id }, { $set: { "lastAccess": currentDateFormat}}).exec()
                        .then(function(usuarioAtt) {
                                res.json({
                                    message: "Usuário encontrado.",
                                    usuario: usuario
                                });
                            },
                            function(erro) {
                                console.log("Erro: " + erro);
                                res.status(500).json(erro);
                            });
                } else {
                    res.json({ message: "Usuário não encontrado." });
                }
            }, function(error) {
                console.log(erro);
                res.status(500).json(error);
            });
    }

    return controller;
}
