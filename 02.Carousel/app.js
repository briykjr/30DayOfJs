const imgs = [
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
];
let i = 0;

function slideMe() {
  document.slide.src = imgs[i];
  (i < imgs.length - 1) ? i++ : i = 0;
  setTimeout("slideMe()", 1000);
}
window.onload = slideMe();
