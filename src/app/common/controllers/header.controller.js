(function() {
    "use strict";

    angular.module('messengers-app')
        .controller('HeaderController', HeaderController);

    function HeaderController($scope, $http, $location, CommonService, Backand) {
        
        $scope.currentUser = CommonService.getUserDetails;

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
                    $location.path('/');
                    return response;
                });
        };
    }
})();
