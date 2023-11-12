const searchBtn = document.querySelector('.header__search-btn');
const searchForm = document.querySelector('.form-search');
const searchBtnClosed = document.querySelector('.form-search__btn-closed');

const navigationList = document.querySelector('.navigation__list');
const navigationBtn = document.querySelector('.navigation__mobile');

const body = document.body;

if(searchBtn && searchForm){
    searchBtn.addEventListener('click', () =>{
        searchForm.classList.toggle('form-search--active');
        body.classList.toggle('lock');
    });

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
