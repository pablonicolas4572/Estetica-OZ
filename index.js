/* 
function Validate() {
    while (!nombre || !apellido) {
        alert("Ingresa nombre y apellido Por Favor!");
        nombre = prompt("Ingresa tu nombre.");
        apellido = prompt("Ingresa tu apellido.");
    }
    alert(`Bienvenido/a ${nombre} ${apellido}, es un placer que nos elijas.`);
}

let nombre = prompt("Ingresa tu nombre.");
let apellido = prompt("Ingresa tu apellido.");

Validate(); */

let Btn1 = document.querySelector
    (".Btn1");
let Btn2 = document.querySelector
    (".Btn2");
let Btn3 = document.querySelector
    (".Btn3");
let Btn4 = document.querySelector
    (".Btn4");

Btn1.addEventListener('click', services);
Btn2.addEventListener('click', services);
Btn3.addEventListener('click', services);
Btn4.addEventListener('click', services);


function services() {
    document.getElementById("msj").innerHTML = '<p> Usted acaba de seleccionar el servicio. </p>';
    document.getElementById("msj").style.color = "green";
    document.getElementById("msj").style.fontSize = "3em";
    document.getElementById("msj").style.textAlign = "center";
}

//
let masajistas = [
    { nombre: "ofelia", edad: 45 },
    { nombre: "raul", edad: 32 },
    { nombre: "pablo", edad: 23 },
    { nombre: "juan", edad: 42 },
];

let search = "ofelia";
let search2 = masajistas.find(item => item == search);

console.log(search2);
