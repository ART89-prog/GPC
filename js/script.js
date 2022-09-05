$(() => {


	if ($('.modal .swiper-container').length) {
        new Swiper('.modal .swiper-container', {
            loop: true,
            speed: 750,
            spaceBetween: 0,
            slidesPerView: 1,
    
       		navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}
        })
    }


	$('.fancybox').fancybox()


	$('body').on('click', '.s-news-item', function (e) {
        e.preventDefault()

        Fancybox.close()

        Fancybox.show([{
            src: $(this).data('content'),
            type: 'inline'
        }])
    })


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}







})


