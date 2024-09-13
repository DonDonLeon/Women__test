const mediaQuery1 = window.matchMedia('(max-width: 1165px)')
const mediaQuery2 = window.matchMedia('(max-width: 920px)')

{
    const element = document.getElementById('header__logo-id')
    const inlineStyles = element.style

    const callback_hidden = () => {
        element.setAttribute('style', 'visibility:hidden;')
    }

    const callback_visible = () => {
        element.setAttribute('style', 'visibility:visible;')
    }

    if (mediaQuery2.matches) {
        const burger = document.querySelector('#burger__main');
        burger.addEventListener('click', callback_visible);
    }

    else if (mediaQuery1.matches) {
        const burger = document.querySelector('#burger__main');
        burger.addEventListener('click', callback_hidden);
    }

    else{
        const burger = document.querySelector('#burger__main');
        burger.addEventListener('click', callback_visible);
    }
}

{
    const element_main = document.getElementById('burger__main')
    
    const burger_hidden = () => {
        element_main.setAttribute('style', 'visibility:hidden;')
    }

    const burger_visible = () => {
        element_main.setAttribute('style', 'visibility:visible;')
    }


    if (mediaQuery2.matches) {
        const burger__main = document.querySelector('#burger__main');
        burger__main.addEventListener('click', burger_hidden);

        const burger__add = document.querySelector('#burger__add');
        burger__add.addEventListener('click', burger_visible);
    }
}