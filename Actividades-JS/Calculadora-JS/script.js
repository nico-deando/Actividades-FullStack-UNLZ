let suma, resta, multi, div, num1, num2, opc, result, confirmacion;

alert("Bienvenido a la calculadora de JavaScript");

do {
  num1 = parseInt(prompt("Ingrese un valor para operar ..."));
  num2 = parseInt(prompt("Ingrese segundo valor para operar ..."));
  opc = prompt(
    "Eliga la operacion deseada: \n suma \n resta \n multiplicar \n dividir"
  );
  switch (opc) {
    case "suma":
      result = num1 + num2;
      alert("La suma de: " + num1 + " + " + num2 + " es: " + result);
      confirmacion = confirm("Desea seguir operando?");
      break;
    case "resta":
      result = num1 - num2;
      alert("La resta de: " + num1 + " - " + num2 + " es: " + result);
      confirmacion = confirm("Desea seguir operando?");
      break;
    case "multiplicar":
      result = num1 * num2;
      alert("La multiplicacion de: " + num1 + " * " + num2 + " es: " + result);
      confirmacion = confirm("Desea seguir operando?");
      break;
    case "dividir":
      result = num1 / num2;
      alert("La division de: " + num1 + "/" + num2 + " es: " + result);
      confirmacion = confirm("Desea seguir operando?");
      break;
    default:
      alert("La operacion ingresada no es valida");
      break;
  }
} while (confirmacion);
alert("Adios");
