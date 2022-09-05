document.addEventListener("DOMContentLoaded",function(){
	'use strict';
	const homeSlider = document.querySelector('.js-home-slider');
	if (homeSlider) {
		const swiperhome = new Swiper(".js-home-slider", {
			speed: 1000,
			slidesPerView: 1,
			parallax: true,
			loop: true,
			navigation: {
				nextEl: ".js-home-slider-next",
				prevEl: ".js-home-slider-prev",
			},
			on: {
				init: function() {
					let swiper = this;
					for (var i = 0; i < swiper.slides.length; i++) {
						swiper.slides[i].childNodes[1].setAttribute(
							"data-swiper-parallax",
							0.75 * swiper.width
							);
					}
				},
				resize: function() {
					this.update();
				}
			},

		});

	}







	document.querySelector('.js-toggle').addEventListener('click', function(e){
		e.preventDefault();
		this.classList.toggle('active');
		document.querySelector('.js-menu').classList.toggle('active');
	});
	if(document.querySelector('.js-filter-toggle')){
		document.querySelector('.js-filter-toggle').addEventListener('click', function(e){
			e.preventDefault();
			this.classList.add('active');
			document.querySelector('.s-filter-filter').classList.add('active');
		});
	}
	if(document.querySelector('.js-filter-close')){
		document.querySelector('.js-filter-close').addEventListener('click', function(e){
			e.preventDefault();
			document.querySelector('.s-filter-filter').classList.remove('active');
		});
	}
	const gallerySlider = document.querySelectorAll('.js-gallery-slider');
	if (gallerySlider) {
		gallerySlider.forEach((el) => {
			new Swiper(el, {
				speed: 1000,
				slidesPerView: 'auto',
				spaceBetween: 25,
				slidesPerGroup: 1,
				navigation: {
					nextEl: el.closest('.s-project-gallery-item-photo').querySelector('.js-gallery-slider-next'),
					prevEl: el.closest('.s-project-gallery-item-photo').querySelector('.js-gallery-slider-prev'),
				},
				breakpoints: {
					0: {
						spaceBetween: 15,
					},
					480: {
						spaceBetween: 15,
					},
					481: {
						spaceBetween: 25,
					},
					768: {
						spaceBetween: 25,
					},
					1024: {
						spaceBetween: 25,
					},
				},



			});

		});
		document.querySelectorAll(".s-flat-porch a").forEach(function (a) {
			a.addEventListener("click", function (event) {

				event.preventDefault();
				const hash = event.currentTarget;
				const items = document.querySelectorAll(".s-flat-porch li");
				for(let it of items) {
					it.classList.remove('active');
				}
				hash.parentNode.classList.add('active');
				let tab = hash.getAttribute("href");
				const blocks = document.querySelectorAll(".s-flat-porch-cont");
				for(let b of blocks) {
					b.style.display = 'none';
				}
				fadeIn(document.querySelector(tab));
			});
		});
		document.querySelectorAll(".s-flat-floor a").forEach(function (a) {
			a.addEventListener("click", function (event) {

				event.preventDefault();
				const hash = event.currentTarget;
				const items = document.querySelectorAll(".s-flat-floor li");
				for(let it of items) {
					it.classList.remove('active');
				}
				hash.parentNode.classList.add('active');
				let tab = hash.getAttribute("href");
				const blocks = document.querySelectorAll(".s-flat-floor-cont");
				for(let b of blocks) {
					b.style.display = 'none';
				}
				fadeIn(document.querySelector(tab));
			});
		});

	}
	const slider = document.getElementById('slider');

	if(slider){
		noUiSlider.create(slider, {
			start: [34, 198],
			connect: true,
			range: {
				'min': 34,
				'max': 198
			},
			step: 1,
			format: {
				from: function(value) {
					return parseInt(value);
				},
				to: function(value) {
					return parseInt(value);
				}
			}

		});
		let sliderValues = [
		document.getElementById('data-start'),
		document.getElementById('data-end')
		];
		slider.noUiSlider.on('update', function (values, handle) {
			sliderValues[handle].innerHTML = values[handle];
		});
	}
	const slider1 = document.getElementById('slider1');

	if(slider1){
		noUiSlider.create(slider1, {
			start: [2, 11],
			connect: true,
			range: {
				'min': 2,
				'max': 11
			},
			step: 1,
			format: {
				from: function(value) {
					return parseInt(value);
				},
				to: function(value) {
					return parseInt(value);
				}
			}

		});
		let sliderValues1 = [
		document.getElementById('data1-start'),
		document.getElementById('data1-end')
		];
		slider1.noUiSlider.on('update', function (values, handle) {
			sliderValues1[handle].innerHTML = values[handle];
		});
	}
	const slider2 = document.getElementById('slider2');

	if(slider2){
		noUiSlider.create(slider2, {
			start: 10,
			connect: "lower",
			step: 1,
			range: {
				'min': 0,
				'max': 10
			},
			format: {
				from: function(value) {
					return parseInt(value);
				},
				to: function(value) {
					return parseInt(value);
				}
			}

		});
		let sliderValues2 = document.getElementById('data2-end')
		slider2.noUiSlider.on('update', function (values, handle) {
			sliderValues2.innerHTML = values[handle];
		});
	}






});
function myFunction(e) {
	var x = e.clientX;
	var y = e.clientY;
	var coor = "Coordinates: (" + x + "," + y + ")";
	let porch = e.target.getAttribute('data-porch');
	let stage = e.target.getAttribute('data-stage');
	document.getElementById("hover_1").querySelector('.data-porch').innerHTML = porch;
	document.getElementById("hover_1").querySelector('.data-stage').innerHTML = stage;
	document.getElementById("hover_1").style.top = y+40+'px';
	document.getElementById("hover_1").style.left = x-40+'px';
	document.getElementById("hover_1").style.display = 'block';
}

function myFunction2(e) {
	document.getElementById("hover_1").style.display = 'none';
}
function flatFunction(e) {
	let attr = e.target.getAttribute('data-attr');
	document.getElementById(attr).classList.add('active')
}

function flatFunction2(e) {
	document.querySelectorAll(".s-flat-floor-flat-hover-block").forEach(function (a) {
		a.classList.remove('active')
	});
}


// fade in

function fadeIn(el){
	el.style.opacity = 0;
	el.style.display = "block";

	(function fade() {
		var val = parseFloat(el.style.opacity);
		if (!((val += .1) > 1)) {
			el.style.opacity = val;
			requestAnimationFrame(fade);
		} 
	})();
}