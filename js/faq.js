var boddy = document.getElementsByTagName('body')[0];
const tabs = document.querySelectorAll('[data-tab-targets]');
const tabContents = document.querySelectorAll('[data-tab-contents]')
tabs.forEach(tab => {
    tab.addEventListener('click',()=>{
         const target = document.querySelector( tab.dataset.tabTargets)
         tabContents.forEach(tabContent => {
             tabContent.classList.remove('active-b');
         })
         tabs.forEach(tab => {
            tab.classList.remove('active-b');
        })
         tab.classList.add('active-b');
         target.classList.add('active-b');

    })
});