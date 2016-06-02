(function() {
    "use strict";

    angular.module('messengers-app')
        .controller('AdminPageController', AdminPageController);

    function AdminPageController($rootScope, $scope, $http, $location, $uibModal, Backand, OrdersService, CommonService) {
        $scope.orders = [];
        //$scope.currentUser = $rootScope.currentUser;

        //clear the current user logged in
        //$rootScope.currentUser = null;
        $scope.currentUser = CommonService.getUserDetails;

        $rootScope.getAllOrders = function() {
            OrdersService.getOrders()
                .then(function(result) {
                    $scope.orders = result.data.data;
                })
                .catch(function(reason) {
                    // alert
                    console.log(reason);
                });
        }

        //$scope.getAllOrders();

        $scope.confirmDelete = function(order) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'confirmDeleteModal.tpl.html',
                controller: 'ModalConfirmDelController',
                resolve: {
                    order: function() {
                        return order;
                    }
                }
            });
        }

        $rootScope.getAllOrders();
    }
})();
