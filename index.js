function Validate(nombre, apellido) {
  //Con esta funcion validamos que nos manden algo!
  while (!nombre || !apellido) {
    alert("Ingresa nombre y apellido Por Favor!");
    nombre = prompt("Ingresa tu nombre.");
    apellido = prompt("Ingresa tu apellido.");
  }
  alert(`Bienvenido/a ${nombre} ${apellido}, es un placer que nos elijas.`);
}

let nombre = prompt("Ingresa tu nombre.");

let apellido = prompt("Ingresa tu apellido.");

Validate(nombre, apellido);

let servicios = prompt(
  "Ingrese el servicio que requiere: \n Baño Lunar \n Masaje Descontracturante \n Masaje Circulatorio  "
);
//Le tire un poco de onda asi era mas intuitivo

switch (
  servicios.toLowerCase() //ponemos en minuscula para que funcione la comparacion
) {
  case "baño lunar":
    alert("Has recibido un descuento del 25% por elegir éste servicio");
    break;
  case "masaje descontracturante":
    alert("Usted ha seleccionado: Masaje descontracturante");
    break;
  case "masaje circulatorio":
    alert(
      `ADVERTENCIA \n El masaje circulatorio es solo para mayores de 18 años`
    ); //arregle esto
    break;
  default:
    alert(
      "¿Acaso no encontró lo que buscaba? Contactenos para más información"
    );
    break;
}
