let contador, limite, opc;

alert("Bienvenido al contador de JS");
opc = prompt("Eliga tipo de contador: 1)Ascendente \n 2)Descendiente ");

contador = parseInt(prompt("Ingrese un numero de inicio..."));
limite = parseInt(prompt("Ingrese limite..."));

switch (opc) {
  case "1":
    for (let i = contador; i <= limite; i++) {
      console.log(i);
    }
    break;
  case "2":
    for (let i = contador; i >= limite; i--) {
      console.log(i);
    }
    break;
  default:
    alert("Opcion incorrecta");
    break;
}
