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



function mostrar(value){
    let pantalla = document.getElementById('miinput')
    pantalla.value += value
}

function limpiar(){
    document.getElementById('miinput').value = ''
}

function resultado(){
    if(true){
        document.getElementById('miinput').value = eval(document.getElementById('miinput').value)
    }else{
        document.getElementById('miinput') = 'Error'
    }
}