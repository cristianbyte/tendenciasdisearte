let home = document.querySelector('#home');
let store = document.querySelector('#store');
let design = document.querySelector('#design');

home.addEventListener('click', () =>{
    if(!home.classList.contains('nav__item--active')){
        home.classList.add('nav__item--active')
        design.classList.remove('nav__item--active')
        store.classList.remove('nav__item--active')
    }
});

store.addEventListener('click', () =>{
    if(!store.classList.contains('nav__item--active')){
        home.classList.remove('nav__item--active')
        design.classList.remove('nav__item--active')
        store.classList.add('nav__item--active')
    }
});

design.addEventListener('click', () =>{
    if(!design.classList.contains('nav__item--active')){
        home.classList.remove('nav__item--active')
        design.classList.add('nav__item--active')
        store.classList.remove('nav__item--active')
    }
});