(function () {
    'use strict';

    angular.module('messengers-app')
        .directive('msgFooter', msgFooter);

    function msgFooter() {
        return {
            restrict: 'E',
            templateUrl: 'app/common/templates/msg-footer.tpl.html'
        };
    }
}());
