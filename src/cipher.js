const cipher = {
   encode,
   decode
}
export default cipher;
// se declara la funcion para codificar
function encode (offset, palabra) {
let outcome=""; //variable para dar el mensaje codificado

  for (let a= 0; a < palabra.length; a++){ // da las vueltas para que haga el desplazamiento en cada caracter
   let entradascii = palabra.charCodeAt(a); // obtiene el codigo ascii de los caracteres ingresados
if (entradascii< 65 || entradascii >90)
{
<<<<<<< HEAD
 alert ("Ingresa solo Mayusculas")
 throw new TypeError;

}else {
=======
  alert ("Ingresa solo Mayusculas")
  throw new TypeError;


}
else {
>>>>>>> 796daa1553d0f5026d4b7c3da17c1a2738588843

  entradascii=(entradascii- 65+parseInt(offset))%26+65; // formula que nos dan como pista para obtener la posicion del desplazamiento
  outcome += String.fromCharCode (entradascii);
}
}//regresa los caracteres con la posiscion de desplazamiento
 return(outcome);
}

// Se declara la funcion para decodificar
function decode (offset, palabra) {
  let outcome="";
    for (let a= 0; a < palabra.length; a++){
let  entradascii = palabra.charCodeAt(a);
if (entradascii< 65 || entradascii >90)
{
<<<<<<< HEAD
alert ("Ingresa solo Mayusculas")
  throw new TypeError;
}
else {

  entradascii =(entradascii+65-parseInt(offset))%26+65;
=======
  alert ("Ingresa solo Mayusculas")
  throw new TypeError;


}
else {

   entradascii =(entradascii+65-parseInt(offset))%26+65;
>>>>>>> 796daa1553d0f5026d4b7c3da17c1a2738588843
  outcome += String.fromCharCode (entradascii);
}
}
  return(outcome);
}
