(function() {
    "use strict";

    angular.module('messengers-app')
        .controller('ModalEmptyMapController', ModalEmptyMapController);

    function ModalEmptyMapController($scope, $uibModalInstance) {
        $scope.ok = function() {
            $uibModalInstance.close();
        };
    }
})();
