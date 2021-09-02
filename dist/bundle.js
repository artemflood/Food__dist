/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction calc() {\r\n    // Calculator\r\n\r\n    const result = document.querySelector('.calculating__result span');\r\n\r\n    let sex, height, weight, age, ratio;\r\n\r\n    if (localStorage.getItem('sex')) {\r\n        sex = localStorage.getItem('sex');\r\n    } else {\r\n        sex = 'female';\r\n        localStorage.setItem('sex', 'female');\r\n    }\r\n\r\n    if (localStorage.getItem('ratio')) {\r\n        ratio = localStorage.getItem('ratio');\r\n    } else {\r\n        ratio = 1.375;\r\n        localStorage.setItem('ratio', 1.375);\r\n    }\r\n\r\n    function calcTotal() {\r\n        if (!sex || !height || !weight || !age || !ratio) {\r\n            result.textContent = '____';\r\n            return;\r\n        }\r\n        if (sex === 'female') {\r\n            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);\r\n        } else {\r\n            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);\r\n        }\r\n    }\r\n\r\n    calcTotal();\r\n\r\n    function initLocalSettings(selector, activeClass) {\r\n        const elements = document.querySelectorAll(selector);\r\n\r\n        elements.forEach(elem => {\r\n            elem.classList.remove(activeClass);\r\n            if (elem.getAttribute('id') === localStorage.getItem('sex')) {\r\n                elem.classList.add(activeClass);\r\n            }\r\n            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {\r\n                elem.classList.add(activeClass);\r\n            }\r\n        });\r\n    }\r\n\r\n    initLocalSettings('#gender div', 'calculating__choose-item_active');\r\n    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');\r\n\r\n    function getStaticInformation(selector, activeClass) {\r\n        const elements = document.querySelectorAll(selector);\r\n\r\n        elements.forEach(elem => {\r\n            elem.addEventListener('click', (e) => {\r\n                if (e.target.getAttribute('data-ratio')) {\r\n                    ratio = +e.target.getAttribute('data-ratio');\r\n                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));\r\n                } else {\r\n                    sex = e.target.getAttribute('id');\r\n                    localStorage.setItem('sex', e.target.getAttribute('id'));\r\n                }\r\n\r\n                elements.forEach(elem => {\r\n                    elem.classList.remove(activeClass);\r\n                });\r\n\r\n                e.target.classList.add(activeClass);\r\n\r\n                calcTotal();\r\n            });\r\n        });\r\n    }\r\n\r\n    getStaticInformation('#gender div', 'calculating__choose-item_active');\r\n    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');\r\n\r\n    function getDynamicInformation(selector) {\r\n        const input = document.querySelector(selector);\r\n\r\n        input.addEventListener('input', () => {\r\n            if (input.value.match(/\\D/g)) {\r\n                input.style.border = \"1px solid red\";\r\n            } else {\r\n                input.style.border = 'none';\r\n            }\r\n            switch(input.getAttribute('id')) {\r\n                case \"height\":\r\n                    height = +input.value;\r\n                    break;\r\n                case \"weight\":\r\n                    weight = +input.value;\r\n                    break;\r\n                case \"age\":\r\n                    age = +input.value;\r\n                    break;\r\n            }\r\n\r\n            calcTotal();\r\n        });\r\n    }\r\n\r\n    getDynamicInformation('#height');\r\n    getDynamicInformation('#weight');\r\n    getDynamicInformation('#age');\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\r\n\n\n//# sourceURL=webpack://food_dist_38/./js/modules/calc.js?");

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _servicec_servicec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../servicec/servicec */ \"./js/servicec/servicec.js\");\n\r\n\r\nfunction cards() {\r\n//  Використовуємо класи для карточок\r\n\r\n    class MenuCard {\r\n        constructor(src, alt, title, descr, price, parentSelector, ...classes) {\r\n            this.src = src\r\n            this.alt = alt\r\n            this.title = title\r\n            this.descr = descr\r\n            this.price = price\r\n            this.classes = classes\r\n            this.parent = document.querySelector(parentSelector)\r\n            this.transfer = 27\r\n            this.changeToUAH()\r\n        }\r\n\r\n        changeToUAH() {\r\n            this.price = this.price * this.transfer\r\n        }\r\n\r\n        render() {\r\n            const element = document.createElement('div')\r\n            if (this.classes.length === 0) {\r\n                this.element = 'menu__item'\r\n                element.classList.add(this.element)\r\n            } else {\r\n                this.classes.forEach(className => element.classList.add(className))\r\n            }\r\n\r\n            this.classes.forEach(className => element.classList.add(className))\r\n            element.innerHTML = `\r\n                   <img src=${this.src} alt=${this.alt}>\r\n                    <h3 class=\"menu__item-subtitle\">${this.title}</h3>\r\n                    <div class=\"menu__item-descr\">${this.descr}</div>\r\n                    <div class=\"menu__item-divider\"></div>\r\n                    <div class=\"menu__item-price\">\r\n                        <div class=\"menu__item-cost\">Цена:</div>\r\n                        <div class=\"menu__item-total\"><span>${this.price}</span> грн/день</div>\r\n                    </div> \r\n           `\r\n            this.parent.append(element)\r\n        }\r\n    }\r\n\r\n    //const menu = new MenuCard()\r\n    //menu.render()\r\n\r\n\r\n\r\n    axios.get('http://localhost:3000/menu')\r\n        .then(data => {\r\n            data.data.forEach(({img, altimg, title, descr, price})=> {\r\n                new MenuCard(img, altimg, title, descr, price, `.menu .container`).render()\r\n            })\r\n        })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);\r\n\n\n//# sourceURL=webpack://food_dist_38/./js/modules/cards.js?");

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./js/modules/modal.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ \"./js/modules/timer.js\");\n/* harmony import */ var _servicec_servicec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicec/servicec */ \"./js/servicec/servicec.js\");\n\r\n\r\n\r\n\r\nfunction forms(formSelector, timerId) {\r\n    // Forms\r\n    const forms = document.querySelectorAll(formSelector)\r\n\r\n    const message = {\r\n        loading: 'img/form/spinner.svg',\r\n        success: 'Спасибо! Скоро ми с вами свяжемся',\r\n        failure: 'что-то пошло не так'\r\n    }\r\n\r\n    forms.forEach(item => {\r\n        bindPostData(item)\r\n    })\r\n\r\n\r\n\r\n    function bindPostData(form) {\r\n        form.addEventListener('submit', (e) => {\r\n            e.preventDefault();\r\n\r\n            let statusMessage = document.createElement('img');\r\n            statusMessage.src = message.loading\r\n            statusMessage.style.cssText = `\r\n            display: block;\r\n            margin: 0 auto;\r\n            `\r\n            //form.appendChild(statusMessage);\r\n            form.insertAdjacentElement('afterend', statusMessage)\r\n\r\n            //const request = new XMLHttpRequest();\r\n            //request.open('POST', 'server.php');\r\n            //request.setRequestHeader('Content-type', 'application/json; charset=utf-8');\r\n            const formData = new FormData(form);\r\n\r\n            /* const object = {}\r\n             formData.forEach(function (value, key) {\r\n                 object[key] = value\r\n             })*/\r\n            const json = JSON.stringify(Object.fromEntries(formData.entries()))\r\n\r\n            // const json = JSON.stringify(object)\r\n\r\n            /*fetch('server.php', {\r\n                method: 'POST',\r\n                headers: {\r\n                    'Content-type': 'application/json; charset=utf-8'\r\n                },\r\n                body: JSON.stringify(object)\r\n            })*/\r\n            ;(0,_servicec_servicec__WEBPACK_IMPORTED_MODULE_2__.postData)('http://localhost:3000/requests', json)\r\n                //.then(data => data.text())\r\n                .then(data => {\r\n                    console.log(data);\r\n                    showThanksModal(message.success)\r\n                    statusMessage.remove()\r\n                }).catch(() => {\r\n                showThanksModal(message.failure)\r\n            }).finally(() => {\r\n                form.reset()\r\n            })\r\n\r\n            //request.send(json);\r\n\r\n            /*request.addEventListener('load', () => {\r\n                if (request.status === 200) {\r\n                    console.log(request.response);\r\n                    showThanksModal(message.success)\r\n\r\n                   // setTimeout(() => {\r\n                        statusMessage.remove()\r\n                    // }, 3000)\r\n                    form.reset()\r\n\r\n                } else {\r\n                    showThanksModal(message.failure);\r\n                }\r\n            });*/\r\n        });\r\n    }\r\n\r\n    function showThanksModal(message) {\r\n        const prevModalDialog = document.querySelector('.modal__dialog')\r\n        prevModalDialog.classList.add('hide')\r\n        ;(0,_modal__WEBPACK_IMPORTED_MODULE_0__.showModal)('.modal', timerId)\r\n\r\n        const thanksModal = document.createElement('div')\r\n        thanksModal.classList.add('modal__dialog')\r\n        thanksModal.innerHTML = `\r\n          <div class=\"modal__content\">\r\n          \r\n     <div class=\"modal__close \" data-close=\"\">×</div>\r\n     <div class=\"modal__title\">${message}</div>\r\n</div>\r\n        `\r\n\r\n        document.querySelector('.modal').append(thanksModal)\r\n        setTimeout(() => {\r\n            thanksModal.remove()\r\n            prevModalDialog.classList.add('show')\r\n            prevModalDialog.classList.remove('hide')\r\n            ;(0,_modal__WEBPACK_IMPORTED_MODULE_0__.hiddenModal)('.modal')\r\n        }, 4000)\r\n    }\r\n\r\n    /*fetch('https://jsonplaceholder.typicode.com/posts', {\r\n        method: 'POST',\r\n        body: JSON.stringify({name: 'Artem'}),\r\n        headers: {\r\n            'Content-type': 'application/json'\r\n        }\r\n    })\r\n        .then(response => response.json())\r\n        .then(json => console.log(json))*/\r\n    fetch('http://localhost:3000/menu')\r\n        .then(data => data.json())\r\n    //.then(res => console.log(res))\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\n\n//# sourceURL=webpack://food_dist_38/./js/modules/forms.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"showModal\": () => (/* binding */ showModal),\n/* harmony export */   \"hiddenModal\": () => (/* binding */ hiddenModal)\n/* harmony export */ });\nfunction showModal(modalSelector, timerId) {\r\n    const modal = document.querySelector(modalSelector);\r\n    modal.classList.add('show');\r\n    modal.classList.remove('hide');\r\n    //modal.classList.toggle('show')\r\n    document.body.style.overflow = 'hidden'\r\n    console.log(timerId)\r\n    if(timerId){\r\n        clearTimeout(timerId)\r\n    }\r\n}\r\n\r\nfunction hiddenModal(modalSelector) {\r\n    const modal = document.querySelector(modalSelector);\r\n    modal.classList.add('hide');\r\n    modal.classList.remove('show');\r\n    // modal.classList.toggle('show')\r\n    document.body.style.overflow = ''\r\n}\r\n\r\nfunction modal(triggerSelector, modalSelector, timerId){\r\n// Modal\r\n\r\nconst modalTrigger = document.querySelectorAll(triggerSelector),\r\n    modal = document.querySelector(modalSelector),\r\n    // modalCloseBtn = document.querySelector('.modal__close'),\r\n    body = document.querySelector('body')\r\n\r\nmodalTrigger.forEach(btn => {\r\n        btn.addEventListener('click', () => showModal(modalSelector, timerId));\r\n});\r\n\r\n\r\n\r\nmodal.addEventListener('click', (e) => {\r\n    if (e.target === modal || e.target.getAttribute('data-close') === \"\") {\r\n        // modal.classList.toggle('show')\r\n        // document.body.style.overflow = ''\r\n        hiddenModal(modalSelector)\r\n    }\r\n})\r\n\r\n\r\n\r\ndocument.addEventListener('keydown', (e) => {\r\n    if (e.code === 'Escape' && modal.classList.contains('show')) {\r\n        hiddenModal(modalSelector)\r\n    }\r\n})\r\n\r\n\r\nfunction showModalByScroll() {\r\n    if (window.pageYOffset + document.documentElement.clientHeight >=\r\n        document.documentElement.scrollHeight) {\r\n        showModal(modalSelector, timerId)\r\n        clearTimeout(showModal)\r\n        window.removeEventListener('scroll', showModalByScroll)\r\n    }\r\n}\r\n\r\nwindow.addEventListener('scroll', showModalByScroll)\r\n\r\n/*getResource('http://localhost:3000/menu')\r\n    .then(data => {\r\n        data.forEach(({img, altimg, title, descr, price})=> {\r\n            new MenuCard(img, altimg, title, descr, price, `.menu .container`).render()\r\n        })\r\n    })*/\r\n/*getResource('http://localhost:3000/menu')\r\n    .then(data => createCard(data))\r\n\r\nfunction  createCard(data) {\r\n    data.forEach(({img, altimg, title, descr, price}) => {\r\n        const element  = document.createElement('div')\r\nprice = price*27\r\n        element.classList.add('menu__item')\r\n\r\n        element.innerHTML = `\r\n        <img src=${img} alt=${altimg}>\r\n                <h3 class=\"menu__item-subtitle\">${title}</h3>\r\n                <div class=\"menu__item-descr\">${descr}</div>\r\n                <div class=\"menu__item-divider\"></div>\r\n                <div class=\"menu__item-price\">\r\n                    <div class=\"menu__item-cost\">Цена:</div>\r\n                    <div class=\"menu__item-total\"><span>${price}</span> грн/день</div>\r\n                </div>\r\n        `\r\n        document.querySelector('.menu .container').append(element)\r\n    })\r\n\r\n}*/\r\n\r\n/*new MenuCard(\r\n    \"img/tabs/vegy.jpg\",\r\n    \"vegy\",\r\n    'меню \"Фитнеc\"',\r\n    'Меню \"Фитнес\" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',\r\n    9,\r\n    `.menu .container`,\r\n    //menu__item'\r\n\r\n).render()\r\nnew MenuCard(\r\n    \"img/tabs/elite.jpg\",\r\n    \"elite\",\r\n    'Меню “Премиум”',\r\n    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',\r\n    20,\r\n    `.menu .container`,\r\n    'menu__item',\r\n    'big'\r\n).render()\r\nnew MenuCard(\r\n    \"img/tabs/post.jpg\",\r\n    \"post\",\r\n    'Меню \"Постное\"',\r\n    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',\r\n    17,\r\n    `.menu .container`,\r\n    'menu__item'\r\n).render()*/\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack://food_dist_38/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/sliders.js":
/*!*******************************!*\
  !*** ./js/modules/sliders.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction sliders ({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {\r\n   // function sliders () {\r\n    //sliders\r\n\r\n    let offset = 0;\r\n    let slideIndex = 1;\r\n\r\n    const slides = document.querySelectorAll(slide),\r\n        slider = document.querySelector(container),\r\n        prev = document.querySelector(prevArrow),\r\n        next = document.querySelector(nextArrow),\r\n        total = document.querySelector(totalCounter),\r\n        current = document.querySelector(currentCounter),\r\n        slidesWrapper = document.querySelector(wrapper),\r\n        width = window.getComputedStyle(slidesWrapper).width,\r\n        slidesField = document.querySelector(field);\r\n    /*const slides = document.querySelectorAll('.offer__slide'),\r\n        slider = document.querySelector('.offer__slider'),\r\n        prev = document.querySelector('.offer__slider-prev'),\r\n        next = document.querySelector('.offer__slider-next'),\r\n        total = document.querySelector('#total'),\r\n        current = document.querySelector('#current'),\r\n        slidesWrapper = document.querySelector('.offer__slider-wrapper'),\r\n        width = window.getComputedStyle(slidesWrapper).width,\r\n        slidesField = document.querySelector('.offer__slider-inner');*/\r\n\r\n    if (slides.length < 10) {\r\n        total.textContent = `0${slides.length}`;\r\n        current.textContent =  `0${slideIndex}`;\r\n    } else {\r\n        total.textContent = slides.length;\r\n        current.textContent =  slideIndex;\r\n    }\r\n\r\n    slidesField.style.width = 100 * slides.length + '%';\r\n    slidesField.style.display = 'flex';\r\n    slidesField.style.transition = '0.5s all';\r\n\r\n    slidesWrapper.style.overflow = 'hidden';\r\n\r\n    slides.forEach(slide => {\r\n        slide.style.width = width;\r\n    });\r\n\r\n    slider.style.position = 'relative';\r\n\r\n    const indicators = document.createElement('ol'),\r\n        dots = [];\r\n    indicators.classList.add('carousel-indicators');\r\n    indicators.style.cssText = `\r\n        position: absolute;\r\n        right: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        z-index: 15;\r\n        display: flex;\r\n        justify-content: center;\r\n        margin-right: 15%;\r\n        margin-left: 15%;\r\n        list-style: none;\r\n    `; // Если хотите - добавьте в стили, но иногда у нас нет доступа к стилям\r\n    slider.append(indicators);\r\n\r\n    for (let i = 0; i < slides.length; i++) {\r\n        const dot = document.createElement('li');\r\n        dot.setAttribute('data-slide-to', i + 1);\r\n        dot.style.cssText = `\r\n            box-sizing: content-box;\r\n            flex: 0 1 auto;\r\n            width: 30px;\r\n            height: 6px;\r\n            margin-right: 3px;\r\n            margin-left: 3px;\r\n            cursor: pointer;\r\n            background-color: #fff;\r\n            background-clip: padding-box;\r\n            border-top: 10px solid transparent;\r\n            border-bottom: 10px solid transparent;\r\n            opacity: .5;\r\n            transition: opacity .6s ease;\r\n        `;\r\n        if (i == 0) {\r\n            dot.style.opacity = 1;\r\n        }\r\n        indicators.append(dot);\r\n        dots.push(dot);\r\n    }\r\n    function  deleteNotDigits(str){\r\n        return +str.replace(/\\D/g, '')\r\n    }\r\n    next.addEventListener('click', () => {\r\n        if (offset === deleteNotDigits(width)* (slides.length - 1)) {\r\n            offset = 0;\r\n        } else {\r\n            offset += deleteNotDigits(width)\r\n        }\r\n\r\n        slidesField.style.transform = `translateX(-${offset}px)`;\r\n\r\n        if (slideIndex == slides.length) {\r\n            slideIndex = 1;\r\n        } else {\r\n            slideIndex++;\r\n        }\r\n\r\n        if (slides.length < 10) {\r\n            current.textContent =  `0${slideIndex}`;\r\n        } else {\r\n            current.textContent =  slideIndex;\r\n        }\r\n\r\n        dots.forEach(dot => dot.style.opacity = \".5\");\r\n        dots[slideIndex-1].style.opacity = 1;\r\n    });\r\n\r\n    prev.addEventListener('click', () => {\r\n        if (offset == 0) {\r\n            offset = deleteNotDigits(width) * (slides.length - 1);\r\n        } else {\r\n            offset -= deleteNotDigits(width)\r\n        }\r\n\r\n        slidesField.style.transform = `translateX(-${offset}px)`;\r\n\r\n        if (slideIndex == 1) {\r\n            slideIndex = slides.length;\r\n        } else {\r\n            slideIndex--;\r\n        }\r\n\r\n        if (slides.length < 10) {\r\n            current.textContent =  `0${slideIndex}`;\r\n        } else {\r\n            current.textContent =  slideIndex;\r\n        }\r\n\r\n        dots.forEach(dot => dot.style.opacity = \".5\");\r\n        dots[slideIndex-1].style.opacity = 1;\r\n    });\r\n\r\n    dots.forEach(dot => {\r\n        dot.addEventListener('click', (e) => {\r\n            const slideTo = e.target.getAttribute('data-slide-to');\r\n\r\n            slideIndex = slideTo;\r\n            offset = deleteNotDigits(width) * (slideTo - 1);\r\n\r\n            slidesField.style.transform = `translateX(-${offset}px)`;\r\n\r\n            if (slides.length < 10) {\r\n                current.textContent =  `0${slideIndex}`;\r\n            } else {\r\n                current.textContent =  slideIndex;\r\n            }\r\n\r\n            dots.forEach(dot => dot.style.opacity = \".5\");\r\n            dots[slideIndex-1].style.opacity = 1;\r\n        });\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliders);\n\n//# sourceURL=webpack://food_dist_38/./js/modules/sliders.js?");

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction  tabs(tabsSelector, tabsContentsSelector, tabsParentSelector, activeClass) {\r\n//Tabs\r\n    const tabs = document.querySelectorAll(tabsSelector),\r\n        tabsContents = document.querySelectorAll(tabsContentsSelector),\r\n        tabsParent = document.querySelector(tabsParentSelector)\r\n\r\n    function hidTabContent() {\r\n        tabsContents.forEach(item => {\r\n            item.style.display = 'none'\r\n        })\r\n        tabs.forEach(item => {\r\n            item.classList.remove(activeClass)\r\n        })\r\n// скриваємо таби з сторніки таким способом\r\n    }\r\n\r\n    function showTabContent(i = 0) {\r\n        tabsContents[i].style.display = 'block'\r\n        tabs[i].classList.add('tabheader__item_active')\r\n    }\r\n\r\n    hidTabContent();\r\n    showTabContent();\r\n    tabsParent.addEventListener('click', (event) => {\r\n        const target = event.target\r\n        if (target && target.classList.contains(tabsSelector.slice(1))) {\r\n            tabs.forEach((item, i) => {\r\n                if (target === item) {\r\n                    hidTabContent();\r\n                    showTabContent(i);\r\n                }\r\n            })\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://food_dist_38/./js/modules/tabs.js?");

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction timer(id, deadLine) {\r\n// Timer\r\n\r\n    //const deadLine = '2021-10-01'\r\n\r\n    function getTimeRemaining(endtime) {\r\n        const t = Date.parse(endtime) - Date.parse(new Date()),\r\n            days = Math.floor(t / (1000 * 60 * 60 * 24)),\r\n            hours = Math.floor((t / (1000 * 60 * 60) % 24)),\r\n            minutes = Math.floor((t / 1000 / 60) % 60),\r\n            seconds = Math.floor((t / 1000) % 60)\r\n\r\n        return {\r\n            'total': t,\r\n            'days': days,\r\n            'hours': hours,\r\n            \"minutes\": minutes,\r\n            'seconds': seconds\r\n        }\r\n    }\r\n\r\n    function getZero(num) {\r\n        if (num >= 0 && num < 10) {\r\n            return `0${num}`\r\n        } else {\r\n            return num\r\n        }\r\n    }\r\n\r\n    function setClock(selector, endtime) {\r\n        const timer = document.querySelector(selector),\r\n            days = timer.querySelector('#days'),\r\n            hours = timer.querySelector('#hours'),\r\n            minutes = timer.querySelector('#minutes'),\r\n            seconds = timer.querySelector('#seconds'),\r\n            timeInterval = setInterval(upDateClock, 1000)\r\n\r\n        upDateClock();\r\n\r\n        function upDateClock() {\r\n            const t = getTimeRemaining(endtime)\r\n\r\n            days.innerHTML = getZero(t.days)\r\n            hours.innerHTML = getZero(t.hours)\r\n            minutes.innerHTML = getZero(t.minutes)\r\n            seconds.innerHTML = getZero(t.seconds)\r\n\r\n            if (t.total <= 0) {\r\n                clearInterval(timeInterval)\r\n            }\r\n        }\r\n    }\r\n\r\n    setClock(id, deadLine)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://food_dist_38/./js/modules/timer.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ \"./js/modules/tabs.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/calc */ \"./js/modules/calc.js\");\n/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ \"./js/modules/cards.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ \"./js/modules/forms.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/timer */ \"./js/modules/timer.js\");\n/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sliders */ \"./js/modules/sliders.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n    const timerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.showModal)('.modal', timerId), 50000)\r\n\r\n    ;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__.default)('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');\r\n    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.default)('[data-modal]', '.modal', timerId);\r\n    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__.default)('form',timerId);\r\n    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_5__.default)('.timer', '2021-10-20');\r\n    (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_6__.default)({\r\n        container:'.offer__slider',\r\nnextArrow: '.offer__slider-next',\r\n        prevArrow: '.offer__slider-prev',\r\n        totalCounter: '#total',\r\n        currentCounter: '#current',\r\n        wrapper: '.offer__slider-wrapper',\r\n        slide: '.offer__slide',\r\n        field: '.offer__slider-inner'\r\n\r\n    });\r\n\r\n})\r\n\r\n\r\n/*\r\nwindow.addEventListener('DOMContentLoaded', function() {\r\n    const timerId = setTimeout(() => showModal('.modal', timerId), 50000);\r\n\r\n    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');\r\n    modal('[data-modal]', '.modal', timerId);\r\n    timer('.timer', '2021-10-30');\r\n    cards();\r\n    calc();\r\n    forms('form', timerId);\r\n    sliders({\r\n        container: '.offer__slider',\r\n        slide: '.offer__slide',\r\n        nextArrow: '.offer__slider-next',\r\n        prevArrow: '.offer__slider-prev',\r\n        totalCounter: '#total',\r\n        currentCounter: '#current',\r\n        wrapper: '.offer__slider-wrapper',\r\n        field: '.offer__slider-inner'\r\n    });\r\n\r\n});*/\r\n\n\n//# sourceURL=webpack://food_dist_38/./js/script.js?");

/***/ }),

/***/ "./js/servicec/servicec.js":
/*!*********************************!*\
  !*** ./js/servicec/servicec.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getResource\": () => (/* binding */ getResource),\n/* harmony export */   \"postData\": () => (/* binding */ postData)\n/* harmony export */ });\nconst postData = async (url, data) => {\r\n    const res = await fetch(url, {\r\n        method: 'POST',\r\n        headers: {\r\n            'Content-type': 'application/json; charset=utf-8'\r\n        },\r\n        body: data\r\n    })\r\n    return await res.json()\r\n}\r\n\r\nconst getResource = async (url) => {\r\n    const res = await fetch(url)\r\n\r\n    if(!res.ok){\r\n        throw new Error(`Could not fetch ${url}, status: ${res.status}`)\r\n    }\r\n\r\n    return await res.json()\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://food_dist_38/./js/servicec/servicec.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;