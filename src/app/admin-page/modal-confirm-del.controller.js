(function() {
    "use strict";

    angular.module('messengers-app')
        .controller('ModalConfirmDelController', ModalConfirmDelController);

    function ModalConfirmDelController($scope, $rootScope, $location, $uibModal, $uibModalInstance, order, OrdersService) {
    	
        $scope.ok = function() {
            $uibModalInstance.close();
        };

        $scope.order = order;

        $scope.deleteOrder = function(order) {
            OrdersService.deleteOrder(order)
                .then(function(res) {
                    $rootScope.getAllOrders();
                    $scope.ok();
                })
                .catch(function(reason) {
                    //alert
                    console.log(reason);
                });
        }
    }
})();
