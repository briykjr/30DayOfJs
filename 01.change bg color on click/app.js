document.querySelector('#btn').addEventListener('click', changeColor);

function changeColor(){
    let r = Math.round( Math.random() * 256 );
    let g = Math.round( Math.random() * 256 );
    let b = Math.round( Math.random() * 256 );
    let color = `rgb(${r},${g},${b})`;
    // let color = 'rgb'+'('+r+','+g+','+b+')';
    // console.log(color);
    document.body.style.backgroundColor = color;
}