import cipher from "./cipher.js";

console.log(cipher);

let word = document.getElementById("palabra");
let offset = document.getElementById("offset");
let pantalla1 = document.getElementById("screenOne");
let pantalla2 = document.getElementById("datos");
let pantalla3 = document.getElementById("final");

function iniciar() {
  pantalla1.style.display = "none";
  pantalla2.style.display = "block";
}

function cifrar() {
  let texto = cipher.encode(offset.value, word.value);
  document.getElementById("txtfinal").innerText = texto;
  pantalla2.style.display = "none";
  pantalla3.style = "display:block";
}

function descifrar() {
  let texto = cipher.decode(offset.value, word.value);
  document.getElementById("txtfinal").innerText = texto;
  pantalla2.style.display = "none";
  pantalla3.style = "display:block";
}

function regreso() {
  document.location.reload(true);
}

document.getElementById("comienzo").addEventListener("click", iniciar);
document.getElementById("codi").addEventListener("click", cifrar);
document.getElementById("decodi").addEventListener("click", descifrar);
document.getElementById("regreso").addEventListener("click", regreso);
