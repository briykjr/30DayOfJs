//Define Variables
const carousleSlide = document.querySelector('.caousel-slide');
const carousleImage = document.querySelectorAll('.caousel-slide img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
let counter = 1;
const size = carousleImage[0].clientWidth;
// console.log(size);
carousleSlide.style.transform = 'translateX(' + (-size * counter) + 'px)' ; 

nextBtn.addEventListener('click', () =>{
  if( counter >= carousleImage.length -1 ) return;
  carousleSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carousleSlide.style.transform = 'translateX(' + (-size * counter) + 'px)' ; 
});

prevBtn.addEventListener('click', () =>{
  if(counter <= 0) return;
  carousleSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carousleSlide.style.transform = 'translateX(' + (-size * counter) + 'px)' ; 
});

carousleSlide.addEventListener('transitionend', () =>{
  if( carousleImage[counter].id === "last"){
    carousleSlide.style.transition = "none";
    counter = carousleImage.length - 2;
    carousleSlide.style.transform = 'translateX(' + (-size * counter) + 'px)' ;
  }
  if( carousleImage[counter].id === "first"){
    carousleSlide.style.transition = "none";
    counter = carousleImage.length - counter;
    carousleSlide.style.transform = 'translateX(' + (-size * counter) + 'px)' ;
  }
});
