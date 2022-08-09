function welcome (nombre, apellido) {
  do {
      if (!nombre || !apellido) {
          alert("Ingresa algún nombre un apellido")
      } else {
          console.log(`Bienvenido/a ${nombre} ${apellido}, es un placer que nos elijas.`)
      }
      break;
  } while (!nombre || !apellido);
}

let nombre = prompt("Ingresa tu nombre.");

let apellido = prompt("Ingresa tu apellido.");

welcome(nombre, apellido);

let servicios = prompt("Ingrese el servicio que requiere");

switch (servicios) {
  case "Baño lunar":
      alert("Has recibido un descuento del 25% por elegir éste servicio")
      break;
  case "Masaje descontracturante":
      alert("Usted ha seleccionado: Masaje descontracturante")
      break;
  case "Masaje circulatorio":
      alert(`ADVERTENCIA` <br> + `El masaje circulatorio es solo para mayores de 18 años`)
      break;
  default:
      alert("¿Acaso no encontró lo que buscaba? Contactenos para más información")
      break;
}






