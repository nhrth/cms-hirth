angular.module('cmshirth').controller('EditMenuConteudoController',
    function($scope, $location, MenuSiteFactory, $routeParams) {
        loadComboParentMenu();

        if ($routeParams.idMenuSite) {
            var idMenuSite = $routeParams.idMenuSite;
            console.log(idMenuSite);
            MenuSiteFactory.editMenuSite(idMenuSite)
                .then(function(response) {
                    $scope.menuSite = response.data;
                }, function(error) {

                });
        } else {
            $scope.menuSite = {};
        }

        $scope.saveMenuSite = function(menuSite) {
            console.log(menuSite);
            MenuSiteFactory.saveMenuSite(menuSite)
                .then(function(response) {
                    $scope.titulo = "Sucesso";
                    $scope.mensagem = response.data.message;
                    $("#modal-edit-menuSite").modal("show");
                }, function(error) {
                    $scope.titulo = "Erro"
                    $scope.mensagem = "Não foi possível salvar. Motivo: " + error.data.errmsg;
                    $("#modal-edit-menuSite").modal("show");
                });
        }

        function loadComboParentMenu() {
            MenuSiteFactory.listMenuSitesName()
                .then(function(response) {
                    $scope.parentMenuSites = response.data;
                }, function(error) {

                });
        }

        $scope.okButtonModal = function() {
            $("#modal-edit-menuSite").modal("hide");
            $location.path("conteudoMenu");
        }


        $scope.buttonCancel = function() {
            $location.path("conteudoMenu");
        }

    });
