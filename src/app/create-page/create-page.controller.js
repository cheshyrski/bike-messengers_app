(function() {
    "use strict";

    angular.module('messengers-app')
        .controller('CreatePageController', CreatePageController);

    function CreatePageController($scope, $http, $location, $uibModal, Backand, OrdersService) {

        //========================
        //calendar functions block
        //========================
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function() {
            $scope.dt = null;
        };

        $scope.inlineOptions = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        $scope.dateOptions = {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2030, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

        // Disable Sunday selection
        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0);
        }

        $scope.open = function() {
            $scope.popup.opened = true;
        };

        $scope.setDate = function(year, month, day) {
            $scope.dt = new Date(year, month, day);
        };

        $scope.format = 'dd-MMMM-yyyy';

        $scope.popup = {
            opened: false
        };

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        }

        //==================
        // Create new Order
        //==================

        $scope.addOrder = function(newOrder) {
            OrdersService.addOrder(newOrder)
                .then(function(res) {
                    var modalInstance = $uibModal.open({
                        animation: true,
                        templateUrl: 'orderCreatedModal.tpl.html',
                        controller: 'ModalEmptyMapController'
                    });
                    $location.path('/');
                })
                .catch(function(reason) {
                    // alert
                    console.log(reason);
                });
        }
    }
})();
