
const rightAngleButton = document.querySelector('.r-angle')
const leftAngleButton = document.querySelector('.l-angle')
const cards = document.querySelector('.cards');
const body = document.querySelector('body');
rightAngleButton.addEventListener('click',function(){
     cards.scrollLeft += 100;
});
leftAngleButton.addEventListener('click',function(){
    cards.scrollLeft -= 100;
});


