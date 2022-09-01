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

let Btn1 = document.querySelector(".Btn1");
let Btn2 = document.querySelector(".Btn2");
let Btn3 = document.querySelector(".Btn3");
let Btn4 = document.querySelector(".Btn4");
let modalContainer = document.querySelector("#msj");
let modal = document.querySelector(".mdl");
let close = document.querySelector("#close");

Btn1.addEventListener('click', () => {
    modalContainer.classList.add('show');
});
close.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});
Btn2.addEventListener('click', () => {
    modalContainer.classList.add('show');
});
close.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});
Btn3.addEventListener('click', () => {
    modalContainer.classList.add('show');
});
close.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});
Btn4.addEventListener('click', () => {
    modalContainer.classList.add('show');
});
close.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});

let botonform = document.getElementById("formbtn");

formbtn.addEventListener('click', () => {
    window.open("pages/home.html", "formulario");
})

const form2 = document.getElementById("btnEmpezar");
btnEmpezar.addEventListener('submit', function (e) {
    e.preventDefault();
    let reserva = new FormData(form2)
})
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
