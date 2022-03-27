// const parrafoUno = document.querySelector('#contenidos_1'); 
// const parrafoDos = document.querySelector('#contenidos_2'); 
// const parrafoTres = document.querySelector('#contenidos_3');

// const enlaceUno = document.querySelector('#enlace_1');
// const enlaceDos = document.querySelector('#enlace_2');
// const enlaceTres = document.querySelector('#enlace_3');



// const ocultarUno = () => {
//     if(){
//         parrafoUno.style.display = "none";
//     }else{

//     }
// } 
// const ocultarDos = () => {
//     parrafoDos.style.display = "none";
// } 
// const ocultarTres = () => {
//     parrafoTres.style.display = "none";
// } 

// enlaceUno.addEventListener('click', ocultarUno);
// enlaceDos.addEventListener('click', ocultarDos);
// enlaceTres.addEventListener('click', ocultarTres);

function muestraOculta(id) {
    var elemento = document.getElementById('contenidos_'+ id);
    var enlace = document.getElementById('enlace_'+ id);
  
    if(elemento.style.display == "" || elemento.style.display == "block") {
      elemento.style.display = "none";
      enlace.innerHTML = 'Mostrar contenidos';
    }
    else {
      elemento.style.display = "block";
      enlace.innerHTML = 'Ocultar contenidos';
    }
  }