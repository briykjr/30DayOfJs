let bg = document.querySelector('.bg');
window.onmousemove = function(e) {
    bg.style.width = e.clientX + "px";
}
