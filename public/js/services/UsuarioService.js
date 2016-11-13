angular.module('cmshirth').service('UsuarioService', function() {

    var usuario = null;

    this.getUsuario = function() {
        return this.usuario;
    }

    this.setUsuario = function(usuario) {
        this.usuario = usuario;
    }

});
