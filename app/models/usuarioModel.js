var mongoose = require('mongoose');

module.exports = function() {

    var usuarioSchema = mongoose.Schema({

        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: {
				unique: true
			}
        },
        usuario: {
        	type: String,
			required: true,
			index: {
				unique: true
			}
        },
        senha: {
        	type: String,
			required: true
        },
        acessos: [{
        	dataAcesso: Date
        }],
        datacriacao: {
            type: Date
        },
        datamodificacao: [{
        	dataModificacao: Date
        }]

    });

    return mongoose.model('Usuario', usuarioSchema);
};
