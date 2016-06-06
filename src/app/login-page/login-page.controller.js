(function() {
    'use strict';

    angular.module('messengers-app')
        .controller('LoginPageController', LoginPageController);

    function LoginPageController($scope, $http, $location, $uibModal, CommonService, ModalWindowsService, Backand) {

        $scope.modalWindows = ModalWindowsService.modalWindows;

        //Sign in to Backand
        $scope.signin = function(form) {
            return Backand.signin(form.username, form.password)
                .then(function(response) {
                    //CommonService.currentUser = CommonService.getUserDetails();
                    $location.path('/admin');
                    return response;
                })
                .catch(function(reason) {
                    var modalInstance = $uibModal.open({
                        animation: true,
                        templateUrl: 'app/common/templates/msg-modal.tpl.html',
                        controller: 'ModalController',
                        resolve: {
                        modalWindow: function() {
                            return $scope.modalWindows[4];
                        }
                    }
                    });
                    $scope.form.username = "";
                    $scope.form.password = "";
                    console.log(reason);
                });
        };

    }
}());
