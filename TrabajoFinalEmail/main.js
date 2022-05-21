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
let contador = 0
let tbodyVar = 0
function generarTabla(){
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    
    table.appendChild(thead);
    table.appendChild(tbody);
    
    document.getElementById('body').appendChild(table);

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Nombre";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Apellido";
    let heading_3 =  document.createElement('th');
    heading_3.innerHTML = "Email";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);
    return tbody;
}
function agregarDato(nuevoNombre,nuevoApellido,nuevoEmail,tbody){
    console.log(nuevoNombre,nuevoApellido,nuevoEmail);
    let row_2 = document.createElement('tr');
    let row_2_nombre= document.createElement('td');
    row_2_nombre.innerHTML = nuevoNombre;
    let row_2_apellido = document.createElement('td');
    row_2_apellido.innerHTML = nuevoApellido;
    let row_2_email = document.createElement('td');
    row_2_email.innerHTML = nuevoEmail;

    row_2.appendChild(row_2_nombre);
    row_2.appendChild(row_2_apellido);
    row_2.appendChild(row_2_email);
    tbody.appendChild(row_2);
}
function generarMail(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let servidor = document.getElementById("servidor").value;
    let email = `${nombre[0]}${apellido}@${servidor}.com`;
    console.log(contador);
    if (contador == 0) {
        tbodyVar = generarTabla();
    }
    agregarDato(nombre,apellido,email,tbodyVar);
    contador = contador + 1;
    console.log(contador);
}


