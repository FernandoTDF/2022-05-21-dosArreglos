let arregloNombres: string[] = new Array(2);
let arregloNumeros: number[] = new Array(3);

let indice: number = 0;

for (indice = 0; indice < arregloNombres.length; indice++) {
  arregloNombres[indice] = String(
    prompt(`Ingrese el Nombre a ingresar para la posicion ${indice}`)
  );
}

for (indice = 0; indice < arregloNumeros.length; indice++) {
  arregloNumeros[indice] = Number(
    prompt(`Ingrese el numero a ingresar para la posicion ${indice}`)
  );
}

for (indice = 0; indice < arregloNombres.length; indice++) {
  console.log(arregloNombres[indice]);
}

for (indice = 0; indice < arregloNumeros.length; indice++) {
  console.log(arregloNumeros[indice]);
}

/* console.log(arregloNombres);
console.log(arregloNumeros);
console.log(arregloNombres.length);
console.log(arregloNumeros.length); */