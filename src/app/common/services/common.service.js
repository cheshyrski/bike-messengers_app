(function() {
    "use strict";

    angular.module('messengers-app')
        .factory('CommonService', CommonService);

    function CommonService(Backand) {

        function getUserDetails() {
            var user = Backand.getUserDetails();
            if (user.$$state.value !== null) {
                return user.$$state.value.username;
            } else {
                return null;
            }
        }

        return {
            getUserDetails: getUserDetails
        }
    }
})();
