



//Variables utiles
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000;

//Valores de los recargos
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%

//Recargo
var recargo = 0;
var recargo_total = 0;

//Precio final
var precio_final = 0;

//Mensajes de alerta para ingresar datos
var nombre = prompt("Ingrese su nombre, por favor");
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ");

if (parseInt(edad) >= 18) {
  //Calculamos el recargo en base a la edad
  if (parseInt(edad) >= 18 && parseInt(edad) < 25) {
    recargo = precio_base * edad_18;
  } else if (parseInt(edad) >= 25 && parseInt(edad) < 50) {
    recargo = precio_base * edad_25;
  } else if (parseInt(edad) >= 50) {
    recargo = precio_base * edad_50;
  }

  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo;
} else {
  alert("Lo siento, la persona a asegurar debe ser mayor de edad.");
}

var casado = prompt("¿Está casad@ actualmente?");

if (casado.toUpperCase() == "SI") {
  var edad_conyuge = prompt("¿Que edad tiene su esposo/a?");
  if (parseInt(edad_conyuge) >= 18) {
    //Calculamos el recargo en base a la edad del cónyuge
    if (parseInt(edad_conyuge) >= 18 && parseInt(edad_conyuge) < 25) {
      recargo = precio_base * casado_18;
    } else if (parseInt(edad_conyuge) >= 25 && parseInt(edad_conyuge) < 50) {
      recargo = precio_base * casado_25;
    } else if (parseInt(edad_conyuge) >= 50) {
      recargo = precio_base * casado_50;
    }

    //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo;
  } else {
    alert("Lo siento, el cónyuge a asegurar debe ser mayor de edad.");
  }
}

var hijos = prompt("¿Tiene hijos o hijas?");

if (hijos.toUpperCase() == "SI") {
  cantidad_hijos = parseInt(prompt("¿Cuántos hijos o hijas tiene?"));
  if (cantidad_hijos > 0) {
    //Calculamos el recargo en base a la cantidad de hijos
    recargo = precio_base * hijos_recargo * cantidad_hijos;

    //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo;
  }
}
