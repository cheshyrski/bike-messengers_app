(function() {
    'use strict';

    angular.module('messengers-app')
        .controller('LoginPageController', LoginPageController);

    function LoginPageController($scope, $http, $location, $uibModal, CommonService, Backand) {

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
                        templateUrl: 'invalidUserModal.tpl.html',
                        controller: 'ModalEmptyMapController'
                    });
                    $scope.form.username = "";
                    $scope.form.password = "";
                    console.log(reason);
                });
        };

    }
}());
