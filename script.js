let display = document.getElementById("display");

function addCaractere(caractere) {
  display.value += caractere;
}

function erase() {
 display.value = display.value.slice(0,-1);
}

function limpar() {
 display.value = "";
}

function result() {
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = "Erro";
    }
}

