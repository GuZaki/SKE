const searchBtn = document.querySelector('.header__search-btn');
const searchForm = document.querySelector('.form-search');
const searchBtnClosed = document.querySelector('.form-search__btn-closed');

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
