//Descuento del 30% por la compra de 2 servicios o más.

function welcomePer(nombres, apellidos) {
    alert (`Bienvenido/a ${nombres} ${apellidos}`);
}

let nombres = prompt("Ingrese sus nombres")
let apellidos = prompt("Ingrese sus apellido")

welcomePer(nombres, apellidos);

let servicios = prompt('ingrese la cantidad de servicios que quiere');
let clase = prompt("¿Qué clase de servicio buscás?")

if (servicios >= 2 && clase == "Baño lunar"){
    alert ("Recibirás un descuento.")
}
else if (servicios >= 2 && clase == "Masaje descontracturante"){
    alert ("Recibirás un descuento.")
}
else (servicios < 2); {
    alert ("Recordá que si contratas 2 o más de nuestros servicios seleccionados recibirás un descuento del 30%.")
}

