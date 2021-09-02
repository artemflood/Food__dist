function  tabs(tabsSelector, tabsContentsSelector, tabsParentSelector, activeClass) {
//Tabs
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContents = document.querySelectorAll(tabsContentsSelector),
        tabsParent = document.querySelector(tabsParentSelector)

    function hidTabContent() {
        tabsContents.forEach(item => {
            item.style.display = 'none'
        })
        tabs.forEach(item => {
            item.classList.remove(activeClass)
        })
// скриваємо таби з сторніки таким способом
    }

    function showTabContent(i = 0) {
        tabsContents[i].style.display = 'block'
        tabs[i].classList.add('tabheader__item_active')
    }

    hidTabContent();
    showTabContent();
    tabsParent.addEventListener('click', (event) => {
        const target = event.target
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hidTabContent();
                    showTabContent(i);
                }
            })
        }
    })
}

export default tabs;