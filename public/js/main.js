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
		})
		.when('/conteudoMenu', {
			templateUrl: 'partials/admin/conteudo-menu.html',
			controller: 'ConteudoMenuController'
		})
		.when('/newMenuConteudo', {
			templateUrl: 'partials/admin/new-menu.html',
			controller: 'NewMenuConteudoController'
		})
		.when('/editMenu/:idMenuSite', {
			templateUrl: 'partials/admin/edit-menu.html',
			controller: 'EditMenuConteudoController'
		})
		.when('/posts', {
			templateUrl: 'partials/admin/posts.html',
			controller: 'PostController'
		})
		.when('/newPost', {
			templateUrl: 'partials/admin/new-post.html',
			controller: 'NewPostController'
		})
		.when('/editPost/:idPost', {
			templateUrl: 'partials/admin/edit-post.html',
			controller: 'EditPostController'
		});

		//Routes Site
		$routeProvider
		.when('/home', {
			templateUrl: 'partials/site/home.html',
			controller: 'homeController'
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