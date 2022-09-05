document.addEventListener("DOMContentLoaded",function(){
	'use strict';
	createMap();
	});

const createMap = function() {
 	ymaps.ready(init);
 	let myMap, myPlacemark;

 	function init() {
 		myMap = new ymaps.Map("map", {
 			center: [59.094570, 37.916020],
 			zoom: 16,
 			behaviors: ['default', 'scrollZoom'],
 			controls: ['fullscreenControl', 'zoomControl']
 		});
 		myPlacemark = new ymaps.Placemark([59.095570, 37.916020], {
 			hintContent: '<span class="b-map__baloon">г. Череповец, Октябрьский проспект, 56</span>',
 		}, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/placemark.png',
           // Размеры метки.
           iconImageSize: [87, 37],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
          });
 		myMap.geoObjects.add(myPlacemark);		
 	}
 };


 const createMap2 = function() {
	ymaps.ready(init);
	let myMap2, myPlacemark2;

	function init() {
		myMap2 = new ymaps.Map("map2", {
			center: [59.094570, 37.916020],
			zoom: 16,
			behaviors: ['default', 'scrollZoom'],
			controls: ['fullscreenControl', 'zoomControl']
		});
		myPlacemark2 = new ymaps.Placemark([59.095570, 37.916020], {
			hintContent: '<span class="b-map__baloon">г. Череповец, Октябрьский проспект, 56</span>',
		}, {
		   // Опции.
		   // Необходимо указать данный тип макета.
		   iconLayout: 'default#image',
		   // Своё изображение иконки метки.
		   iconImageHref: 'img/placemark.png',
		  // Размеры метки.
		  iconImageSize: [87, 37],
		   // Смещение левого верхнего угла иконки относительно
		   // её "ножки" (точки привязки).
		   iconImageOffset: [0, 0]
		 });
		myMap.geoObjects.add(myPlacemark);		
	}
};