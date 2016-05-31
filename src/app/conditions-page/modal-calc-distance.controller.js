(function() {
    "use strict";

    angular.module('messengers-app')
        .controller('ModalCalcDistanceController', ModalCalcDistanceController);

    function ModalCalcDistanceController($scope, $uibModalInstance, distance) {
    	$scope.distance = distance;
        $scope.ok = function() {
            $uibModalInstance.close();
        };
    }
})();
