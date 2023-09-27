// camelCase
// = asignacion
// == comparacion
let usuario = "juan";
let permisosUsuario = "guardar, descargar, editar";

let estaAutenticado = true;

if( !estaAutenticado ){

    alert("Debe primero estar autenticado");

}else{

    alert("Bienvenido a facebook");

}

let num1;
let num2;

num1 = 10;
num2 = 20;

if (num1 == num2) {
    alert(num1 + "es igual a" + num2)
} else if (num1 > num2) {
    alert(num1 + " es mayor")
}else{
    alert(num2 + "es mayor")
}