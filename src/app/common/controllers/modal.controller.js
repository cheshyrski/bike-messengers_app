(function() {
    "use strict";

    angular.module('messengers-app')
        .controller('ModalController', ModalController);

    function ModalController($scope, $uibModalInstance, modalWindow) {
    	$scope.modalWindow = modalWindow;

        $scope.ok = function() {
            $uibModalInstance.close();
        };
    }
})();
