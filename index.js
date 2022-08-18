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

Validate();

 function services() {
    let servicios
    alert("Por favor, a continuación elija el número de la opción del servicio que usted requiera. (ej.: 1)")
    do {
        servicios = prompt(`ingrese el servicio que requiera \n 1_ Baño de luna \n 2_ Masaje relajante \n 3_ Drenaje linfatico \n 4_ masaje estimulante/reafirmante` );
        if (servicios == 1) {
            alert ("Felicidades, ha conseguido un descuento del 25% por elegir este servicio.")
        } else if (servicios == 2) {
            alert(`Ha seleccionado "masaje relajante".`)
        } else if (servicios == 3) {
            alert(`ADVERTENCIA \n el drenaje linfático solo es apta para personas mayores de 18 años.`)
        } else if (servicios == 4) {
            alert(`Usted seleccionó el masaje estimulante/reafirmante.`)
        } else {
            alert(`Por favor, ingrese una opción`)
        }
    } while (servicios != 4);
 }

services ();
//
let masajistas = [
    { nombre: "ofelia", edad:45},
    { nombre: "raul", edad:32},
    { nombre: "pablo", edad:23},
    { nombre: "juan", edad:42},
];

let search = "ofelia";
let search2 = masajistas.find (item => item == search);
