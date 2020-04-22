document.getElementById("output").style.display = "none";
document.getElementById('PoundInput').addEventListener('input',  function (e) {
    document.getElementById("output").style.display = "block";
    let pounds = e.target.value ;
    document.getElementById("gramsOutput").innerHTML = pounds * 453.592 ;
    document.getElementById("kgOutput").innerHTML = pounds * 0.453592 ;
    document.getElementById("ozOutput").innerHTML = pounds * 16 ;
    if ( pounds == 0){
        document.getElementById("output").style.display = "none";
    }
});