var mongoose = require('mongoose');

module.exports = function() {

    var usuarioSchema = mongoose.Schema({

        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        creationDate: String,
        lastAccess: String,
        lastModification: String
    });

    return mongoose.model('Usuario', usuarioSchema);
};
