(function () {
    'use strict';

    angular.module('messengers-app')
        .directive('messengersHeader', messengersHeader);

    function messengersHeader() {
        return {
            restrict: 'A',
            templateUrl: 'app/common/templates/messengers-header.tpl.html',
            controller: MainPageController
        };
    }
}());
