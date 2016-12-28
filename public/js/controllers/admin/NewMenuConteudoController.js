angular.module('cmshirth').controller('NewMenuConteudoController',
    function($scope, $location, MenuSiteFactory) {   	

        loadComboParentMenu();

        $scope.saveMenuSite = function(menuSite){
            MenuSiteFactory.saveMenuSite(menuSite)
                .then(function(response){
                    if(response.data.message == "Menu cadastrado com sucesso!" || response.data.message == "Submenu cadastrado com sucesso!")
                        $location.path("conteudoMenu");
                }, function(error){

                });
        }

        function loadComboParentMenu(){
            MenuSiteFactory.listMenuSitesName()
                .then(function(response){
                    $scope.parentMenuSites = response.data;
                }, function(error){

                });
        }

        $scope.buttonCancel = function(){
            $location.path("conteudoMenu");
        }

    });