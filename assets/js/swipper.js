
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: false,
    slidesPerView: 6,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,

    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        "320": {
            "slidesPerView": 2,
            "spaceBetween": 40
        },
        "480": {
            "slidesPerView": 3,
            "spaceBetween": 60
        },
        "640": {
            "slidesPerView": 4,
            "spaceBetween": 80
        },
        "992": {
            "slidesPerView": 6,
            "spaceBetween": 120
        }
    }
});
var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 15,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        "320": {
            "slidesPerView": 1,
            "spaceBetween": 40
        },
        "1200": {
            "slidesPerView": 3,
            "spaceBetween": 40
        },


    }

});