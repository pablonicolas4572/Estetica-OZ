
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

const bienvenida = document.getElementById("bienvenida");

bienvenida.addEventListener('click', () => {
    document.getElementById("divForm")
    divForm.innerHTML = `
    <div class="form-Index">
    <h2>Te damos la bienvenida a nuestro SPA</h2>
    <h3>Por favor, a continuación completá los siguientes datos</h3>
    <form class="row g-3">
    <div class ="col-6">
    <label class="form-label" for="nombre">Nombre</label>
    <input class="form-control" id="nombre" type="text">
    </div>
    <div class="col-6">
    <label class="form-label" for="apellido">Apellido</label>
    <input class="form-control" id="apellido" type="text">
    </div>
    <div class="col-6">
    <button type="submit" id="enviar" class="btn btn-dark">Enviar</button>
    </div>
    `
})

const arrayNombre = [];
const arrayApellido = [];

const enviar = document.getElementById("divForm");

divForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    const nombreUsuario = { nombre, apellido };
    const nombreApellido = { apellido };

    arrayNombre.push(nombreUsuario, nombreApellido);
    localStorage.setItem('usuarios', JSON.stringify(nombreUsuario, nombreApellido));
    JSON.parse(localStorage.getItem('usuarios'));
    //una vez que la persona haga click en el boton "enviar", le va a aparecer ésta alerta.
    Swal.fire(
        'Se registró en nuestra base de datos!',
        'Estética O-Z',
        'success'
    )
})

let masajistas = [
    { nombre: "ofelia", edad: 45 },
    { nombre: "raul", edad: 32 },
    { nombre: "pablo", edad: 23 },
    { nombre: "juan", edad: 42 },
];

let search = "ofelia";
let search2 = masajistas.find(item => item == search);

console.log(search2);
