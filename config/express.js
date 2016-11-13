var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
    var app = express();

    // Variável de ambiente
    app.set('port', 3000);

    // Middlewares

    // Indica que os arquivos públicos ficarão na pasta public.
    app.use(express.static('./public')); 
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // Middleware necessário para que o navegador consiga interpretar os verbos DELETE e PUT.
    app.use(require('method-override')());

    // Carregamento de rotas pelo express-load.
    load('models', { cwd: 'app' })
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
};
