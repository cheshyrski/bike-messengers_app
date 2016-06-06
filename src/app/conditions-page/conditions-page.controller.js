(function() {
    "use strict";

    angular.module('messengers-app')
        .controller('ConditionsPageController', ConditionsPageController);

    function ConditionsPageController($scope, $timeout, $uibModal, ModalWindowsService) {
        $scope.map;
        $scope.markers = [];
        $scope.markerId = 1;
        $scope.modalWindows = ModalWindowsService.modalWindows;

        //Map initialization
        $timeout(function() {

            var latlng = new google.maps.LatLng(49.841835389, 24.03132611);
            var myOptions = {
                zoom: 13,
                center: latlng,
                disableDoubleClickZoom: true,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            $scope.map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
            $scope.overlay = new google.maps.OverlayView();
            $scope.overlay.draw = function() {}; // empty function required
            $scope.overlay.setMap($scope.map);
            $scope.element = document.getElementById('map_canvas');

            $scope.element.addEventListener("dblclick", function(event) {
                $scope.addOnClick(event);
            });



        }, 100);

        //Delete all Markers
        $scope.deleteAllMarkers = function() {

            if ($scope.markers.length == 0) {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'app/common/templates/msg-modal.tpl.html',
                    controller: 'ModalController',
                    resolve: {
                        modalWindow: function() {
                            return $scope.modalWindows[0];
                        }
                    }
                });
                return;
            }

            for (var i = 0; i < $scope.markers.length; i++) {

                //Remove the Marker from the Map                  
                $scope.markers[i].setMap(null);
            }

            //Remove the Marker from array.
            $scope.markers.length = 0;
            $scope.markerId = 0;
        };

        $scope.rad = function(x) {
            return x * Math.PI / 180;
        };

        //add Marker to the Map
        $scope.addOnClick = function(event) {
            var x = event.pageX;
            var y = event.pageY - 70;
            var point = new google.maps.Point(x, y);
            var coordinates = $scope.overlay.getProjection().fromContainerPixelToLatLng(point);

            var marker = new google.maps.Marker({
                position: coordinates,
                map: $scope.map
            });

            marker.id = $scope.markerId;
            $scope.markerId++;
            $scope.markers.push(marker);
        };

        //Calculate the distance between the Markers
        $scope.calculateDistance = function() {

            if ($scope.markers.length < 2) {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'app/common/templates/msg-modal.tpl.html',
                    controller: 'ModalController',
                    resolve: {
                        modalWindow: function() {
                            return $scope.modalWindows[1];
                        }
                    }
                });
            } else {
                var totalDistance = 0;
                var partialDistance = [];
                partialDistance.length = $scope.markers.length - 1;

                for (var i = 0; i < partialDistance.length; i++) {
                    var p1 = $scope.markers[i];
                    var p2 = $scope.markers[i + 1];

                    var R = 6378137; // Earth’s mean radius in meter
                    var dLat = $scope.rad(p2.position.lat() - p1.position.lat());
                    var dLong = $scope.rad(p2.position.lng() - p1.position.lng());
                    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                        Math.cos($scope.rad(p1.position.lat())) * Math.cos($scope.rad(p2.position.lat())) *
                        Math.sin(dLong / 2) * Math.sin(dLong / 2);
                    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    totalDistance += R * c / 1000; //distance in Km
                    partialDistance[i] = R * c / 1000;
                }
                $scope.distance = totalDistance.toFixed(1);
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'distanceModal.tpl.html',
                    controller: 'ModalCalcDistanceController',
                    resolve: {
                        distance: function() {
                            return $scope.distance;
                        }
                    }
                });
            };
        };
    };
})();
