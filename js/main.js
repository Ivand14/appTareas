function nombreValido() {
  let ingresarNombre = prompt("Bienvenido a todo list app. Cual es tu nombre?");

  while (ingresarNombre != "") {
    alert(`${ingresarNombre} Bienvenido a todo list app`);

    break;
  }
  while (ingresarNombre == "") {
    alert("Ingresa un nombre correcto");
    ingresarNombre = prompt("vuelve a ingresar tu nombre");
  }
}

function fechas(cumple) {
  console.log(`se agendo la fecha de su cumpleaños ${cumple}`);
}

function datos() {
  let mail = prompt("Ingrese su correo electronico");
  while (mail == "") {
    mail = prompt("Vuelva a ingresar su correo electronico");
  }
  let contraseña = prompt("Ingrese su contraseña");

  for (let i = 0; i < 1; i++) {
    contraseña = prompt("Confirme su contraseña");
  }
}

function recordatorio() {
  let recordar = prompt("¿Desea programar una alarma? Si/No");

  switch (recordar) {
    case "Si":
      recordar = prompt("¿A que hora desea su alarma?");
      alert(`su alarma fue programada a las ${recordar}`);
      break;
    case "No":
      alert("No se programará ninguna a alarma");
      break;
    default:
      recordatorio();
  }
}

function notificacion() {
  let notificaciones = prompt("¿Desea recibir notificaciones? Si/No");

  switch (notificaciones) {
    case "Si":
      alert(`Usted recibira notificaciones`);
      break;
    case "No":
      alert("No recibira notificaciones");
      break;
    default:
      notificacion();
  }
}

function fechas(cumple) {
  console.log(`se agendo la fecha de su cumpleaños ${cumple}`);
}

nombreValido();
let fecha = fechas("04/11/1999");
datos();
recordatorio();
notificacion();
