(function () {
    "use strict";

    angular.module('messengers-app')
        .config(routes);

    function routes($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'main-page/main-page.tpl.html',
                controller: 'MainPageController',
                title: 'BM кур\'єрська доставка'
            })
            .when('/conditions', {
                templateUrl: 'conditions-page/conditions-page.tpl.html',
                controller: 'ConditionsPageController',
                title: 'BM умови та ціни'
            })
            .when('/create', {
                templateUrl: 'create-page/create-page.tpl.html',
                controller: 'CreatePageController',
                title: 'BM форма замовлення'
            })
            .when('/admin', {
                templateUrl: 'admin-page/admin-page.tpl.html',
                controller: 'AdminPageController',
                title: 'BM список замовлень'
            })
            .when('/admin/:id', {
                templateUrl: 'edit-order-page/edit-order-page.tpl.html',
                controller: 'EditOrderPageController',
                title: 'BM деталі замовлення'
            })
            .when('/not-found', {
                templateUrl: 'not-found-page/not-found-page.tpl.html',
                title: 'Bike messengers'
            })
            .when('/login', {
                templateUrl: 'login-page/login-page.tpl.html',
                controller: 'LoginPageController',
                title: 'BM авторизація'
            })
            .otherwise({
                redirectTo: '/not-found'
            });
    }
})();