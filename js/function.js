// Función para manejar los clics en los botones
function addNumber(event) {
  // Obtiene el elemento de entrada
  let input = document.getElementById("myInput");

  // Obtiene el valor numérico del botón clickeado o el operador
  const clickedButtonValue = event.target.getAttribute("data-value");

  if (clickedButtonValue !== null) {
    // Si el botón clickeado tiene un valor válido, lo agrega al campo de entrada
    input.value += clickedButtonValue;
  } else {
    // Si no tiene un valor válido, borra el campo de entrada
    input.value = null;
  }
}

// Configura los botones para que utilicen la función addNumber
document.getElementById("button1").addEventListener("click", addNumber);
document.getElementById("button2").addEventListener("click", addNumber);
document.getElementById("plusButton").addEventListener("click", addNumber);

// Configura el botón "Clear" para que borre el campo de entrada
document.getElementById("clearButton").addEventListener("click", function () {
  document.getElementById("myInput").value = "";
});