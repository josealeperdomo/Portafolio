// EJERCICIOS
/*
1) Crear una calculadora con HTML, CSS y JavaScript.

2) Crear un formulario que contenga lo siguiente:
   * Nombres (Letras y espacios)
   * Apellidos (Letras y espacios)
   * Edad (Numero)
   * Fecha de Nacimiento (DD/MM/YY)
   * Cedula de Identidad 
   * Direccion de IP (192.168.1.1)
   * Direccion MAC (00:1B:44:11:3A:B7)
   * Numero de Telefono (412-888-99-99) 
   Nota: Validar cada uno de estos campos con expresiones regulares.
*/

let pantalla = document.getElementById('miinput');


function mostrar(value){
    if(pantalla.value === '0' && value == 0){
        pantalla.value = '0';
    }else if(pantalla.value == '0' && value >= 0){
        pantalla.value = '';
        pantalla.value += value;
    }else if(pantalla.value == 'Syntax ERROR'){
        pantalla.value = 'Syntax ERROR';
    }else{
        pantalla.value += value;
    }
}

function limpiar(){
    pantalla.value = '0';
}

function eliminar(){
    if(pantalla.value.length == 1){
        pantalla.value = '0';
    }else if(pantalla.value == 'Syntax ERROR'){
        pantalla.value = 'Syntax ERROR';
    }else if(pantalla.value != 0 || pantalla.value.length > 1){
        pantalla.value = pantalla.value.slice(0, pantalla.value.length-1);
    }
}

function resultado(){
    try{
        pantalla.value = eval(pantalla.value);
    }catch{
        pantalla.value = 'Syntax ERROR';
    }
}