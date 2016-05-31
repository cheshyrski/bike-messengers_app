(function() {
    "use strict";

    angular.module('messengers-app')
        .controller('EditOrderPageController', EditOrderPageController);

    function EditOrderPageController($scope, $http, $location, $routeParams, $uibModal, Backand, OrdersService) {
        $scope.order = {};

        $scope.getOrder = function(id) {
            OrdersService.getOne(id)
                .then(function(res) {
                    $scope.order = res.data;
                })
                .catch(function(reason) {
                    // alert
                    console.log(reason);
                });
        }

        var id = $routeParams.id;
        $scope.getOrder(id);

        $scope.editOrder = function(order) {
            OrdersService.updateOrder(order)
                .then(function(res) {
                    var modalInstance = $uibModal.open({
                        animation: true,
                        templateUrl: 'orderUpdatedModal.tpl.html',
                        controller: 'ModalEmptyMapController'
                    });
                    $location.path('/admin');
                })
                .catch(function(reason) {
                    // alert
                    console.log(reason);
                });
        }
    }
})();
