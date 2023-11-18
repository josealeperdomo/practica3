/*2) Crear un formulario que contenga lo siguiente:
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
let enviar = document.getElementById('enviar')

enviar.addEventListener('click', function(){
    let regexnombre = /^[a-zA-Z]+\s[a-zA-Z]+$/
    let nombre = document.getElementById('nombre').value
    console.log(nombre);
    console.log(regexnombre.test(nombre));
    if(regexnombre.test(nombre)){
        alert('si')
    }else{
        alert('no')
    }
    let regexedad = /^([1-9])|([1-9])([1-9])$/
    let edad = document.getElementById('edad').value
    console.log(edad);
    if(regexedad.test(edad)){
        alert('edad correcta')
    }else{
        alert('error')
    }
    let regexfecha = 
})

