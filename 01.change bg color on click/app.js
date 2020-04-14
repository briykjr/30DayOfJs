document.querySelector('#btn').addEventListener('click', changeColor);

function changeColor(){
    let color = `rgb(x,x,x)`.replace(/x/gi, _ => Math.round(Math.random() * 256));
    document.body.style.backgroundColor = color;
}
