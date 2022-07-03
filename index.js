//Descuento del 30% por la compra de 2 servicios o más.
const servicios = prompt("ingrese la cantidad de servicios que quiere");

const clase = prompt("¿Qué clase de servicio buscás?")


if (servicios >= 2 && clase == "Baño lunar"){
    alert ("Recibirás un descuento.")
}
else if (servicios >= 2 && clase == "Masaje descontracturante"){
    alert ("Recibirás un descuento.")
}
else (servicios <=1); {
    alert ("Recordá que si contratas 2 o más de nuestros servicios seleccionados recibirás un descuento del 30%.")
}