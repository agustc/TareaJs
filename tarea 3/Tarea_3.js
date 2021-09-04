/*
    - Tarea JS N°3 -

    En este archivo JS encontarán una serie de ejercicios para poner en práctica los
    conocimientos adquiridos.

    Esta tarea contendrá 14 ejercicios relacionados a tipos de datos compuestos y 2 ejercicios
    optativos de mayor dificultad para quien disfrute de los desafios.

    Fecha límite de entrega: Sábado 07/09 a las 20:00 hs hasta ejercicio 8.
    Fecha límite de entrega: Sábado 14/09 a las 20:00 hs hasta ejercicio 9 al 14 y los 2 desafios.

    Pasada la fecha límite ya no se recibirán trabajos. La tarea no es obligatoria, pero es
    altamente recomendado hacerla para fijar conocimientos de cara a temáticas cada vez
    más complejas.

    ¿Vamos con ello?
*/

// Ejercicio 1 
function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de números enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:

    let total=0;
    //let i;
    for (let i = 0; i < resultadosTest.length; i++) {
        total += resultadosTest[i];
        
    }
    return total/resultadosTest.length;
}

console.log(promedioResultadosTest([10,3,2,8]));



// Ejercicio 2
function numeroMasGrande(numeros) {
      // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    let max=0;
    for (let i = 0; i < numeros.length; i++) {
        if(max<numeros[i]){
            max=numeros[i];
        }
        
    }
    return max;
}
console.log(numeroMasGrande([1,10,8]))

// Ejercicio 3
 /* Usa la palabra clave 'arguments' para multiplicar todos los argumentos y devolver
    el producto. */
    // Si no se pasan argumentos devuelve 0
    // Si se pasa un solo argumento, simplemente devuélvelo.
    // Tu código:
    function multiplicarArgumentos() {
        if(arguments.length === 0){
            return 0;
        }
        if(arguments.length === 1){
            let arg = arguments[0]
            return arg;
        }
        else{
            let arg = arguments[0]
            for (let i = 1; i < arguments.length; i++){
                arg = arg * arguments[i];
            }
            return arg;
        }
    }
    console.log(multiplicarArgumentos(2, 2, 2));



// Ejercicio 4
function crearGato(nombre, edad) {

    
    this.nombre= nombre;
    this.edad= edad;

    this.meow=function(){
        console.log("Meoww!");
    }
}
    let gato= new crearGato('Chini','10');

    console.log(gato);

    /* Crear un nuevo objeto con la propiedad "nombre" y el valor deifnido como el argumento
    "nombre" */
    /* Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el
    argumento edad */
    // Agrega el método (función) llamado "meow" que devuelva el string "Meow!"
    // Devuelve el objeto
    // Tu código




/*
// Ejercicio 5
function agregarPropiedad(objeto, property) {
    this.objeto= null;
    // Agrega una propiedad al objeto (argumento "objeto") con el valor 'null'
    // Devuelve el objeto
    /* Nota: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento
    llamado "property" (una cadena/string) */
    // Tu código:
//return objeto;
//} 


// Ejercicio 6
// "metodo" es una cadena que contiene el nombre de un método (función) en el objeto
    // Invoca ese método
    // Nada necesita ser devuelto ("returned")
    // Tu código:
function invocarMetodo(objeto, maullar) {
     this.maullar = function () {
    console.log("miau");
                                };
}
        let gati = new invocarMetodo();
        gati.maullar();

        // Ejercicio 7


function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
    // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
    // Multiplica el numeroMisterioso por 5 y devuelve el producto
    // Tu código:

    return 5*objetoMisterioso;
}
console.log(multiplicarNumeroDesconocidoPorCinco(2));


// Ejercicio 8
// Elimina la propiedad "propiedad" de "objeto"
    // Devuelve el objeto
    // Tu código:
function eliminarPropiedad(arma, poder) {
   
   this.arma=arma;
   this.poder=poder;
  
}
let eliminar= new eliminarPropiedad('sable','rayos')
delete eliminar.arma;
console.log(eliminar);

/* --------------------------------------------------------------------- */

// Ejercicio 9
function nuevoUsuario(nombre, email, password) {
    /* Crea un nuevo objeto con las propiedades coinicidiendo con los argumentos que se pasan
    a la función */
    // Devuelve el objeto
    // Tu código:
}

// Ejercicio 10
function tieneEmail(usuario) {
    // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
    // De lo contrario, devuelve "false"
    // Tu código:
}

// Ejercicio 11
function verificarPassword(usuario, password) {
    // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto usuario.
    // Devuelve "true" si coinciden.
    // De lo contrario, devuelve "false"
    // Tu código:
}

// Ejercicio 12
function actualizarPassword(usuario, nuevaPassword) {
    // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
    // Devuelve el objeto
    // Tu código:
}

// Ejercicio 13
function agregarAmigo(usuario, nuevoAmigo) {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    // Tu código:
}

// Ejercicio 14
// Crear una clase con 3 propiedades.
// Crear 2 objetos hijos que extiendan de esa clase, y a cada uno agrearle una propiedad nueva.

/*
    - Desafío - Ejercicios especiales -

    Al igual que la clase pasada, los ejercicios especiales son un
    desafío adicional de mucha mayor dificultad para poner a prueba sus
    habilidades autodidactas y de investigación.
    No necesitan hacerlos si no lo desean, pero considero que va a ampliar
    mucho sus capacidades resolutorias.

    Vamos a ellos:

    * Desafío N°1 *
    Programa una función que devuelva un número aleatorio entre 701 y 800.
    
    * Desafío N°2 *
    Programa una función que reciba un número y evalúe si es capicúa o no 
    (que se lee igual en un sentido que en otro), miFuncion(2002) devolverá true.
*/


/* 
    - Comentarios adicionales -

    Como habrá notado, la tarea de esta clase ha escalado considerablemente en dificultad. Son
    pocos los ejercicios que podrán hacer sin al menos investigar algún concepto o algún método.
    ¿Por qué sucede esto?
    Por que en programación, cada nueva aplicación, cada nueva website, cada nuevo proyecto que
    hagan les va a demandar conocimientos que no tienen, métodos que nunca usaron y hasta capaz
    ni conocen, librerías que jamás usaron y capaz jamas escucharon nombrar, mucha documentación,
    etc.
    Por este motivo, considero importante empezar a entrenarlos un poco en el arte de investigar.

    Se que esta tarea les va a llevar mas tiempo que las anteriores, y se que muchos capaz no
    tengan el tiempo necesario para resolverla toda, pero no importa, resuelvan hasta donde
    puedan, lo importante es que se lancen a la cacería de información.
    Y si algún ejercicio no les sale, cuando me envien la tarea manden igual esos ejercicios
    hasta donde los tengan por que tal vez pueda darles alguna pista de como avanzar.

    Prefiero que empiecen a golpearse un poquitito la cabeza ahora a que resuelvan todo así 
    nomás y que, cuando tengan que resolver con el tiempo ajustado en alguna empresa, no tengan
    esta habilidad autodidacta de investigación desarrollada.

    Confíen en mi, va a valer la pena.

    Ahora sin más, los dejo trabajar tranquilos. 

    A seguir con ese entusiasmo que esta es la última clase de Tipos de Datos compuestos y ya
    nos metemos en el mundo de la Asincronía!!
*/

/* 
    Información que pueden ir investigando:
    - Temporizadores
    - Concepto de Asincronía
    - Concepto de Even Loop
    - Funciones Callbacks
    - Closures
*/