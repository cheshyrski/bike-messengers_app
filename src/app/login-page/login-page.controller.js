(function() {
    'use strict';

    angular.module('messengers-app')
        .controller('LoginPageController', LoginPageController);

    function LoginPageController($rootScope, $scope, $http, $location, $uibModal, Backand) {

        //clear the current user logged in
        //$rootScope.currentUser = null;

        $scope.getUserDetails = function() {
            var user = Backand.getUserDetails();
            if (user.$$state.value !== null) {
                $rootScope.currentUser = user.$$state.value.username;
            } else {
                $rootScope.currentUser = null;
            }
        }

        //Sign in to Backand
        $scope.signin = function(form) {
            return Backand.signin(form.username, form.password)
                .then(function(response) {
                    $scope.getUserDetails();
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
