(function() {
    "use strict";

    angular.module('messengers-app')
        .factory('ModalWindowsService', ModalWindowsService);

    function ModalWindowsService() {

        var modalWindows = [{
            header: 'Відсутні мітки для видалення',
            source: 'images/map_empty.svg',
            body: 'На карті має бути проставлена хоча би одна мітка'
        }, {
            header: 'Недостатня кількість міток',
            source: 'images/map_markered.svg',
            body: 'Для розрахунку відстані проставте хоча би дві мітки на карті за допомогою подвійного кліку'
        }, {
            header: 'Ваше замовлення створене',
            source: 'images/emoticons/monster_love.png',
            body: ''
        }, {
            header: 'Замовлення відредаговано',
            source: 'images/emoticons/monster_success.png',
            body: ''
        }, {
            header: 'Невірний логін або пароль',
            source: 'images/emoticons/monster_cry.png',
            body: 'Будьте уважні та спробуйте ввести значення ще раз'
        }];

        return {
            modalWindows: modalWindows
        }
    }
})();
