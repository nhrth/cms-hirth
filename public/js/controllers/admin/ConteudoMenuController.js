angular.module('cmshirth').controller('ConteudoMenuController',
    function($scope, $http, $location, MenuSiteFactory) {

        listMenus();

        function listMenus() {
            MenuSiteFactory.listMenuSites()
                .then(function(response) {
                    console.log(response);
                    $scope.menus = response.data;
                }, function(error) {
                    console.log(error);
                });
        }

        $scope.newMenu = function() {
            $location.path("newMenuConteudo");
        }

        $scope.deleteMenu = function(menu) {
            $scope.titulo = "Deletar Menu";
            $scope.mensagem = "Tem certeza que deseja deletar o menu " + menu.titleMenu + "?";
            $scope.menuDelete = menu._id;
            $("#modal-delete-menu").modal("show");
        }

        $scope.activeMenuSite = function(menu){
            $scope.titulo = "Ativar Menu";
            $scope.mensagem = "Tem certeza que deseja ativar o menu " + menu.titleMenu + "?";
            $scope.menuActive = menu._id;
            $("#modal-active-menu").modal("show");
        }

        $scope.inactiveMenuSite = function(menu){
            $scope.titulo = "Desativar Menu";
            $scope.mensagem = "Tem certeza que deseja desativar o menu " + menu.titleMenu + "?";
            $scope.menuInactive = menu._id;
            $("#modal-inactive-menu").modal("show");
        }

        $("#yes-button").click(function() {
            MenuSiteFactory.deleteMenuSite($scope.menuDelete)
                .then(function(response) {
                    $scope.titulo = "Sucesso";
                    $scope.mensagem = response.data.message;
                    $("#modal-delete-menu").modal("hide");
                    $("#modal-success-delete-menu").modal("show");
                }, function(error) {
                    console.log("Erro ao deletar usuário");
                });
        });

        $("#yes-button-active").click(function() {
            MenuSiteFactory.activeMenuSite($scope.menuActive)
                .then(function(response) {
                    $scope.titulo = "Sucesso";
                    $scope.mensagem = response.data.message;
                    $("#modal-active-menu").modal("hide");
                    $("#modal-success-active-menu").modal("show");
                }, function(error) {
                    console.log("Erro ao ativar usuário");
                });
        });

        $("#yes-button-inactive").click(function() {
            MenuSiteFactory.inactiveMenuSite($scope.menuInactive)
                .then(function(response) {
                    $scope.titulo = "Sucesso";
                    $scope.mensagem = response.data.message;
                    $("#modal-inactive-menu").modal("hide");
                    $("#modal-success-inactive-menu").modal("show");
                }, function(error) {
                    console.log("Erro ao desativar usuário");
                });
        });

        $("#ok-button").click(function() {
            $("#modal-success-delete-menu").modal("hide");
            listMenus();
        });

        $("#ok-button-active").click(function() {
            $("#modal-success-active-menu").modal("hide");
            listMenus();
        });

        $("#ok-button-inactive").click(function() {
            $("#modal-success-inactive-menu").modal("hide");
            listMenus();
        });

    });
