const mediaQuery1 = window.matchMedia('(max-width: 1165px)')
const mediaQuery2 = window.matchMedia('(max-width: 920px)')

// {
//     const element = document.getElementById('header__logo-id')
//     const inlineStyles = element.style

//     const callback_right = () => {
//         element.setAttribute('style', 'margin-left:auto;')
//     }

//     const callback_left = () => {
//         element.setAttribute('style', 'visibility:visible;')
//     }

//     if (mediaQuery2.matches) {
//         const burger = document.querySelector('#burger__main');
//         burger.addEventListener('click', callback_right);
//     }

//     else if (mediaQuery1.matches) {
//         const burger = document.querySelector('#burger__main');
//         burger.addEventListener('click', callback_left);
//     }

//     else{
//         const burger = document.querySelector('#burger__main');
//         burger.addEventListener('click', callback_right);
//     }
// }

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