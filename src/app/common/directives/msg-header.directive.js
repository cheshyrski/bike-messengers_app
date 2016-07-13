(function () {
    'use strict';

    angular.module('messengers-app')
        .directive('msgHeader', msgHeader);

    function msgHeader() {
        return {
            restrict: 'E',
            templateUrl: 'common/templates/msg-header.tpl.html',
            controller: 'HeaderController'
        };
    }
}());
