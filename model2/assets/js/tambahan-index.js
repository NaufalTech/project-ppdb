var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    scrollbar: {
        el:'.swiper-scrollbar',
    },

    spaceBetween: 30,
    centeredSlides: true,

    autoplay: {
      delay: 5,
      disableOnInteraction: false
    },

})

// var mySwiper
// const swiper = new swiper('.swiper-container', {


//    });