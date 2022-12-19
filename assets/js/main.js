// Swiper
new Swiper('.feedback', {
    navigation: {
        nextEl: '.sw-btn-next',
        prevEl: '.sw-btn-prev'
    },

    simulateTouch: false,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    loop: true,
});

// Anchors
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

// Burger
let burgerBtn = document.querySelector('.burger');
let burgerMenu = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', function() {
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');
})

// AOS


AOS.init({
    once: true,
    
    disable: 'mobile'
});
