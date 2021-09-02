require('es6-promise').polyfill()
import 'polyfill-nodelist-foreach'



import  tabs  from './modules/tabs';
import modal from './modules/modal';
import  calc  from './modules/calc';
import  cards  from './modules/cards';
import  forms  from './modules/forms';
import  timer  from './modules/timer';
import  sliders  from './modules/sliders';
import {showModal} from './modules/modal'

window.addEventListener('DOMContentLoaded', () => {
    const timerId = setTimeout(() => showModal('.modal', timerId), 50000)

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', timerId);
    calc();
    cards();
    forms('form',timerId);
    timer('.timer', '2021-10-20');
    sliders({
        container:'.offer__slider',
nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        slide: '.offer__slide',
        field: '.offer__slider-inner'

    });

})


/*
window.addEventListener('DOMContentLoaded', function() {
    const timerId = setTimeout(() => showModal('.modal', timerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', timerId);
    timer('.timer', '2021-10-30');
    cards();
    calc();
    forms('form', timerId);
    sliders({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });

});*/
