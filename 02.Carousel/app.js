let i = 0,
  img = [];
//Listing all images
img[0] = "img/1.jpg";
img[1] = "img/2.jpg";
img[2] = "img/3.jpg";
img[3] = "img/4.jpg";
img[4] = "img/5.jpg";

function slideMe() {
  document.slide.src = img[i];
  if (i < img.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("slideMe()", 5000);
}
window.onload = slideMe();
