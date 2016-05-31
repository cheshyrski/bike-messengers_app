(function() {
    "use strict";

    angular.module('messengers-app', ['ngRoute', 'ui.bootstrap', 'backand', 'ngMaterial'])

    .config(function(BackandProvider) {
        BackandProvider.setAppName('messengers');
        BackandProvider.setSignUpToken('45471ddf-7bdf-492c-96ff-16530b8deff0');
        BackandProvider.setAnonymousToken('fa3ebf5b-21ab-4b50-a579-c7672a1aee3b');
        BackandProvider.runSocket(true);
    })

    .run(function($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function(event, current) {
            // test for current route
            if (current.$$route) {
                // Set current page title 
                $rootScope.title = current.$$route.title;
            }
        });
        //clear the current user logged in
        $rootScope.currentUser = null;

    })
})();
