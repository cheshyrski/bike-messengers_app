(function() {
    "use strict";

    angular.module('messengers-app')
        .factory('OrdersService', OrdersService);

    function OrdersService($http, Backand) {
        var baseUrl = '/1/objects/';
        var objectName = 'orders';

        function getUrlForId(id) {
            return getUrl() + id;
        }

        function getOrders() {
            return $http({
                method: 'GET',
                url: Backand.getApiUrl() + baseUrl + objectName,
                params: {
                    pageSize: 20,
                    pageNumber: 1,
                    filter: '',
                    sort: ''
                }
            });
        };

        function getOne(id) {
            return $http({
                method: 'GET',
                url: Backand.getApiUrl() + baseUrl + objectName + '/' + id
            })
        };

        function addOrder(newOrder) {
            return $http({
                method: 'POST',
                url: Backand.getApiUrl() + baseUrl + objectName,
                data: newOrder,
                params: {
                    returnObject: true
                }
            });
        };

        function updateOrder(order) {
            return $http({
                method: 'PUT',
                url: Backand.getApiUrl() + baseUrl + objectName + '/' + order.id,
                data: order
            })
        };


        function deleteOrder(order) {
            return $http({
                method: 'DELETE',
                url: Backand.getApiUrl() + baseUrl + objectName + '/' + order.id
            })
        };

        return {
            getOrders: getOrders,
            getOne: getOne,
            addOrder: addOrder,
            updateOrder: updateOrder,
            deleteOrder: deleteOrder
        }
    }
})();
