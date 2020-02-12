const cipher = {encode, decode
};
// se declara la funcion para codificar
function encode (offset, msj) {
  let outcome="": //variable para dar el mensaje codificado
  let entradascii;
  let salidascii;
  for (let a= 0; a < msj.length, a++); // da las vueltas para que haga el desplazamiento en cada caracter 
    entradascii = msj.chartCodeAt(a); // obtiene el codigo ascii de los caracteres ingresados
  salidascii =((entradascii - 65 + parseInt(offset))% 26 + 65 ); // formula que nos dan como pista para obtener la posicion del desplazamiento
  outcome += string.fromCharCode (salidascii); //regresa los caracteres con la posiscion de desplazamiento
  return(outcome); 
  console.log(outcome);
}
// Se declara la funcion para decodificar
function decode (offset, msj) {
  let outcome="": 
  let entradascii;
  let salidascii;
  for (let a= 0; a < msj.length, a++);
    entradascii = msj.chartCodeAt(a);
  salidascii =((entradascii + 65 - parseInt(offset))% 26 + 65 );
  outcome += string.fromCharCode (salidascii);
  return(outcome);
  console.log(outcome);
}


export default cipher;

