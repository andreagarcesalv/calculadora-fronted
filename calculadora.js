
//Declaracion de variables
let valor_a;
let valor_b;
let operando;

//script que rescata el valor de cada boton
$(document).ready(function () {
  $("#uno").on("click", function () {
    $("#resultado").append("1");
  });
  $("#dos").on("click", function () {
    $("#resultado").append("2");
  });
  $("#tres").on("click", function () {
    $("#resultado").append("3");
  });
  $("#cuatro").on("click", function () {
    $("#resultado").append("4");
  });
  $("#cinco").on("click", function () {
    $("#resultado").append("5");
  });
  $("#seis").on("click", function () {
    $("#resultado").append("6");
  });
  $("#siete").on("click", function () {
    $("#resultado").append("7");
  });
  $("#ocho").on("click", function () {
    $("#resultado").append("8");
  });
  $("#nueve").on("click", function () {
    $("#resultado").append("9");
  });
  $("#cero").on("click", function () {
    $("#resultado").append("0");
  });

  //Operaciones
  $("#reset").on("click", function () {
    resetear();
  });
  $("#suma").on("click", function () {
    valor_a = $("#resultado").html();
    operando = "+";
    $("#memoria").html(valor_a + " " + operando + " ");
    limpiar();
  });
  $("#resta").on("click", function () {
    valor_a = $("#resultado").html();
    operando = "-";
    $("#memoria").html(valor_a + " " + operando + " ");
    limpiar();
  });
  $("#multiplicacion").on("click", function () {
    valor_a = $("#resultado").html();
    operando = "*";
    $("#memoria").html(valor_a + " " + operando + " ");
    limpiar();
  });
  $("#division").on("click", function () {
    valor_a = $("#resultado").html();
    operando = "/";
    $("#memoria").html(valor_a + " " + operando + " ");
    limpiar();
  });

  //Btn igual
  $("#igual").on("click", function () {
    valor_b = $("#resultado").html();
    $("#memoria").html(valor_a + " " + operando + " " + valor_b);
    resolver();
  });
});

//Funciones
function limpiar() {
  $("#resultado").html("");
}

function resetear() {
  $("#resultado").html("");
  $("#memoria").html("");
  valor_a = 0;
  valor_b = 0;
  operando = "";
}

function resolver() {
  var res = 0;
  switch (operando) {
    case "+":
      res = parseFloat(valor_a) + parseFloat(valor_b);
      break;

    case "-":
      res = parseFloat(valor_a) - parseFloat(valor_b);
      break;

    case "*":
      res = parseFloat(valor_a) * parseFloat(valor_b);
      break;

    case "/":
      res = parseFloat(valor_a) / parseFloat(valor_b);
      break;
  }

  $("#memoria").html();
  $("#resultado").html(res);
}
