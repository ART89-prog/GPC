document.addEventListener("DOMContentLoaded",function(){
	'use strict';
	createMap();
	});

const createMap = function() {
 	ymaps.ready(init);
 	let myMap, myPlacemark;

 	function init() {
 		myMap = new ymaps.Map("map", {
 			center: [59.123804,37.92706],
 			zoom: 16,
 			behaviors: ['default', 'scrollZoom'],
 			controls: ['fullscreenControl', 'zoomControl']
 		});
 		myPlacemark = new ymaps.Placemark([59.123804,37.92706], {
 			hintContent: '<span class="b-map__baloon">г. Череповец, ул. Дзержинского 49</span>',
 		}, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/img/marker.svg',
           // Размеры метки.
           iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
          });
 		myMap.geoObjects.add(myPlacemark);
 	}
 };


