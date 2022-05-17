/*
Generador de direcciones de email en web HTML:

Hacer una página web con HTML y javascript, dándole estilo con css, 
que tenga tres Input, uno para el "nombre", otro para el "apellido" y el último 
para el "servidor de correos electrónicos", junto con un botón y una tabla vacía, 
con las siguientes columnas "nombre" "apellido" "dirección email". 
Al apretar el botón los Input quedarán nuevamente vacíos y con los datos obtenidos 
se creará una dirección de email de la siguiente manera:

"primera letra del nombre" + "apellido" + @ + servidor de correo + .com

Esa dirección de email junto con los otros datos deberán ser guardados en la tabla, 
se podrá ingresar la cantidad de datos que se deseen en la tabla.

*/

function generarMail(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let servidor = document.getElementById("servidor").value;
    let email = `${nombre[0]}${apellido}@${servidor}.com`;
    console.log(email);
}
