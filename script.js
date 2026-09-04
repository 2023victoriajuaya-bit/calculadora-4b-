let operacionActual = "";

const resultado = document.getElementById("resultado");
const operacion = document.getElementById("operacion");


function actualizarPantalla() {

    if (operacionActual === "") {
        resultado.textContent = "0";
    } else {
        resultado.textContent = operacionActual;
    }

}


// Agregar números y operadores
function agregar(valor) {

    operacionActual += valor;

    actualizarPantalla();

}


// Borrar todo
function borrarTodo() {

    operacionActual = "";

    operacion.textContent = "";

    resultado.textContent = "0";

}


// Borrar el último número
function borrarUno() {

    operacionActual = operacionActual.slice(0, -1);

    actualizarPantalla();

}


// Calcular las 4 operaciones básicas
function calcular() {

    if (operacionActual === "") {
        return;
    }

    try {

        let cuenta = operacionActual;

        let respuesta = Function(
            '"use strict"; return (' + cuenta + ')'
        )();

        if (!isFinite(respuesta)) {
            throw new Error();
        }

        operacion.textContent = operacionActual + " =";

        resultado.textContent = respuesta;

        operacionActual = respuesta.toString();

    } catch {

        resultado.textContent = "Error";

        operacionActual = "";

    }

}


// Raíz cuadrada
function raiz() {

    if (operacionActual === "") {
        return;
    }

    let numero = Number(operacionActual);

    if (numero < 0 || isNaN(numero)) {

        resultado.textContent = "Error";

        return;
    }

    let respuesta = Math.sqrt(numero);

    operacion.textContent = "√" + numero + " =";

    resultado.textContent = respuesta;

    operacionActual = respuesta.toString();

}


// Potencia al cuadrado
function potencia() {

    if (operacionActual === "") {
        return;
    }

    let numero = Number(operacionActual);

    if (isNaN(numero)) {

        resultado.textContent = "Error";

        return;
    }

    let respuesta = numero * numero;

    operacion.textContent = numero + "² =";

    resultado.textContent = respuesta;

    operacionActual = respuesta.toString();

}


// Porcentaje
function porcentaje() {

    if (operacionActual === "") {
        return;
    }

    let numero = Number(operacionActual);

    if (isNaN(numero)) {

        resultado.textContent = "Error";

        return;
    }

    let respuesta = numero / 100;

    operacion.textContent = numero + "% =";

    resultado.textContent = respuesta;

    operacionActual = respuesta.toString();

}


// También funciona con el teclado
document.addEventListener("keydown", function(event) {

    const tecla = event.key;

    if ("0123456789.+-*/()".includes(tecla)) {

        agregar(tecla);

    }

    else if (tecla === "Enter" || tecla === "=") {

        calcular();

    }

    else if (tecla === "Backspace") {

        borrarUno();

    }

    else if (tecla === "Escape") {

        borrarTodo();

    }

});
