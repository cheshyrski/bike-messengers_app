(function() {
    "use strict";

    angular.module('messengers-app')
        .controller('HeaderController', HeaderController);

    function HeaderController($rootScope, $scope, $http, $location, Backand) {
       
         $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.isHide = function (viewLocation) {
            return viewLocation === $location.path();
        };

        //Sign out from Backand
        $scope.signout = function() {
            return Backand.signout()
                .then(function(response) {
                    $rootScope.currentUser = null;
                    $location.path('/');
                    return response;
                });
        };
    }
})();
