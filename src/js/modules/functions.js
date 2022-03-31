// //проверка поддержки WEBP, добавление класса WEBP или NO-WEBP для HTML
// export function isWebp() {
// // проверка поддержки WEBP
//     function testWebP(callback) {

//         var webP = new Image();
//         webP.onload = webP.onerror = function () {
//             callback(webP.height == 2);
//         };
//         webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
//     }

//     testWebP(function (support) {

//         if (support == true) {
//             document.querySelector('body').classList.add('webp');
//         } else {
//             document.querySelector('body').classList.add('no-webp');
//         }
//     });
// }

// ПОПРОБУЕМ ПРОДУБЛИРОВАТЬ ВСЁ ТОЖЕ НО С ПОДХОДОМ С ЕС-6
//ниже опция работает подобным образом. Добаляет класс в HTML.
//До этого она класс добавляла там где есть картинка с классом
//и того. разницы ни какой по сути. кроме того что сразу видно поддержку класа

//проверка поддержки WEBP, добавление класса WEBP или NO-WEBP для HTML
export function isWebp() {
    //проверка поддержки WEBP
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    //добавление класса _WEBP или _NO-WEBP для HTML
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}