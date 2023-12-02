const searchBtn = document.querySelector('.header__search-btn');
const searchBtnMob = document.querySelector('.header__search-btn-mob');

const searchForm = document.querySelector('.form-search');
const searchFormMob = document.querySelector('.form-search-mob');

const searchBtnClosed = document.querySelector('.form-search__btn-closed');

const navigationList = document.querySelector('.mobile__menu');
const navigationBtn = document.querySelector('.navigation__mobile');
const mobileNavigationBtnClosed = document.querySelector('.mobile-form-search__btn-closed');

const asideBlock = document.querySelector('.fix-cookies');
const asideBtnClosed = document.querySelector('.fix-cookies__btn');

const body = document.body;

window.addEventListener('resize', function() { //открывается при разрешении до 970 px
    if (window.innerWidth > 971) {
        if(searchBtn && searchForm){
            searchBtn.addEventListener('click', () =>{
                searchForm.classList.toggle('form-search--active');
                body.classList.toggle('lock');
            });
        };
    };
});

if(searchBtn && navigationList){ //открывается при разрешении от 970 px
    searchBtn.addEventListener('click', () =>{
        navigationList.classList.toggle('navigation__list--active');
        body.classList.toggle('lock');
    });
};

if(searchFormMob && searchBtnMob){
    searchBtnMob.addEventListener('click', () =>{
        searchFormMob.classList.toggle('form-search--active');
        body.classList.toggle('lock');
    });
};

if(searchBtnClosed && searchForm){
    searchBtnClosed.addEventListener('click', () =>{
        searchForm.classList.remove('form-search--active');
        body.classList.remove('lock');
    });
};

if(navigationBtn && navigationList){
    navigationBtn.addEventListener('click', () =>{
        navigationList.classList.toggle('navigation__list--active');
        navigationBtn.classList.toggle('active');
        body.classList.toggle('lock');
    });
};

if(mobileNavigationBtnClosed && navigationList){
    mobileNavigationBtnClosed.addEventListener('click', () => {
        navigationList.classList.remove('navigation__list--active');
        body.classList.remove('lock');
    });
};

setTimeout(() => {
    asideBlock.classList.add('fix-cookies_vissible')
}, 3000);

if(asideBlock && asideBtnClosed){
    asideBtnClosed.addEventListener('click', () => {
        asideBlock.classList.remove('fix-cookies_vissible');
        body.classList.remove('lock');
    });
};

//slider

var swiper = new Swiper(".promo__wrap", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".promo__arrows .promo__arrow-next",
        prevEl: ".promo__arrows .promo__arrow-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".news__wrap", {
    loop: true,
    navigation: {
        nextEl: ".news__arrows .arrow-next",
        prevEl: ".news__arrows .arrow-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        470: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        670: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiper = new Swiper(".partners__wrap", {
    loop: true,
    navigation: {
        nextEl: ".partners__arrows .arrow-next",
        prevEl: ".partners__arrows .arrow-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        470: {
            slidesPerView: 1.5,
            spaceBetween: 30,
        },
        630: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        769: {
            slidesPerView: 2.4,
            spaceBetween: 30,
        },
        940: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

