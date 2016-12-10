angular.module('Authentication', []);

angular.module('cmshirth', ['Authentication', 'ngRoute', 'ngCookies', 'ngResource', 'ui.bootstrap'])
	.config(function($routeProvider, $httpProvider){

		//Routes Admin
		$routeProvider		
		.when('/login', {
			templateUrl: 'partials/admin/login.html',
			controller: 'LoginController'
		})
		.when('/dashboard', {
			templateUrl: 'partials/admin/dashboard.html',
			controller: 'DashboardController'
		})
		.when('/cadastroUsuario', {
			templateUrl: 'partials/admin/cadastro-usuario.html',
			controller: 'CadastroUsuarioController'
		})
		.when('/configUsuarios', {
			templateUrl: 'partials/admin/config-usuarios.html',
			controller: 'ConfigUsuariosController'
		})
		.when('/newUser', {
			templateUrl: 'partials/admin/new-user.html',
			controller: 'NewUserController'
		})
		.when('/editUser/:idUser', {
			templateUrl: 'partials/admin/edit-user.html',
			controller: 'EditUserController'
		});

		//Routes Site
		$routeProvider
		.when('/inicio', {
			templateUrl: 'partials/site/inicio.html',
			controller: 'inicioController'
		})
		.when('/menu', {
			templateUrl: 'partials/site/menu.html',
			controller: 'menuController'
		})
		.when('/noticias', {
			templateUrl: 'partials/site/allnoticias.html',
			controller: 'allNoticiasController'
		})
		.when('/noticia/:idNoticia', {
			templateUrl: 'partials/site/noticia.html',
			controller: 'noticiaController'
		});

		$routeProvider.otherwise({ redirectTo: '/login' })
	})

	.run(function($rootScope, $location, $cookieStore, $http){

		/*$rootScope.globals = $cookieStore.get('globals') || {};
		if($rootScope.globals.currentUser) {
			$http.defaults.headers.common['Authorization'] = 'Basic' + $rootScope.globals.currentUser.authdata;
		}

		$rootScope.$on('$locationChangeStart', function(event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== 'login' && !$rootScope.globals.currentUser) {
                $location.path('login');
            }
        });*/

	});