let contador, limite, user, password, confirmacion;

alert("Bienvenido para seguir navegando debe crear una cuenta...");

confirmacion = true;
contador = 0;
limite = 5;
user = prompt("Ingrese un Usuario...");
password = prompt("Ingrese una contraseña...");

alert("cuenta creada con exito...");
alert("Ingrese con sus credenciales...");

while (contador != 5) {
  if (
    prompt("Ingrese Usuario:") == user &&
    prompt("Ingrese contraseña") == password
  ) {
    alert("BIENVENIDO " + user.toUpperCase());
    break;
  } else {
    contador++;
    if (contador < 5) {
      confirmacion = confirm(
        "Datos incorrectos desea intentar otra vez?" + limite + "/" + contador
      );
      if (!confirmacion) {
        break;
      }
    } else {
      alert("A exedido el numero de intentos, intente mas tarde");
    }
  }
}
alert("Adios");
