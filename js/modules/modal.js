function showModal(modalSelector, timerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    //modal.classList.toggle('show')
    document.body.style.overflow = 'hidden'
    console.log(timerId)
    if(timerId){
        clearTimeout(timerId)
    }
}

function hiddenModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    // modal.classList.toggle('show')
    document.body.style.overflow = ''
}

function modal(triggerSelector, modalSelector, timerId){
// Modal

const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector),
    // modalCloseBtn = document.querySelector('.modal__close'),
    body = document.querySelector('body')

modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => showModal(modalSelector, timerId));
});



modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') === "") {
        // modal.classList.toggle('show')
        // document.body.style.overflow = ''
        hiddenModal(modalSelector)
    }
})



document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
        hiddenModal(modalSelector)
    }
})


function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight) {
        showModal(modalSelector, timerId)
        clearTimeout(showModal)
        window.removeEventListener('scroll', showModalByScroll)
    }
}

window.addEventListener('scroll', showModalByScroll)

/*getResource('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, altimg, title, descr, price})=> {
            new MenuCard(img, altimg, title, descr, price, `.menu .container`).render()
        })
    })*/
/*getResource('http://localhost:3000/menu')
    .then(data => createCard(data))

function  createCard(data) {
    data.forEach(({img, altimg, title, descr, price}) => {
        const element  = document.createElement('div')
price = price*27
        element.classList.add('menu__item')

        element.innerHTML = `
        <img src=${img} alt=${altimg}>
                <h3 class="menu__item-subtitle">${title}</h3>
                <div class="menu__item-descr">${descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${price}</span> грн/день</div>
                </div>
        `
        document.querySelector('.menu .container').append(element)
    })

}*/

/*new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'меню "Фитнеc"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    `.menu .container`,
    //menu__item'

).render()
new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    20,
    `.menu .container`,
    'menu__item',
    'big'
).render()
new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    17,
    `.menu .container`,
    'menu__item'
).render()*/
}

export default modal;
export{showModal, hiddenModal}