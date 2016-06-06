(function() {
    "use strict";

    angular.module('messengers-app')
        .controller('EditOrderPageController', EditOrderPageController);

    function EditOrderPageController($scope, $http, $location, $routeParams, $uibModal, Backand, ModalWindowsService, OrdersService, CommonService) {
        $scope.order = {};
        $scope.currentUser = CommonService.getUserDetails;
        $scope.modalWindows = ModalWindowsService.modalWindows;

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
                        templateUrl: 'app/common/templates/msg-modal.tpl.html',
                        controller: 'ModalController',
                        resolve: {
                        modalWindow: function() {
                            return $scope.modalWindows[3];
                        }
                    }
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
