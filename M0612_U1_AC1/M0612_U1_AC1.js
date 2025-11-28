//  Tasca 1.  Prepara un breu fragment de codi que il·lustri cadascuna d’aquestes particularitats de 
// JavaScript. Entregar en un únic fitxer JS amb comentaris.  

// 1. let i var: comparativa dels respectius abasts (scopes). 
function scopeEjemplo() {
    if (true) {
        var x = 10; 
        let y = 15;
    }
    console.log(x);
}

// 2. let i var: redeclaració de variables i hoisting de declaracions.
var puedo = "Primera caja";
var puedo = "Segunda caja";  //  VAR permite esto

let noPuedo = "Primera caja";
let noPuedo = "Segunda caja"; //  LET no permite esto (error)

console.log(miVariable);  // undefined (no error, pero vacío)
var miVariable = "Ahora tengo valor";

// 3. Conversió a tipus numèric des de diversos altres tipus de dada amb Numeric().
Number("123")     // "123" (texto) - 123 (número)
Number("abc")     // "abc" (texto) - NaN (No es un Número)
Number(true)      // true - 1
Number(false)     // false - 0

// 4. Diferència d’ús entre Numeric() vs parseInt(). 
Number("123abc")     //  NaN (no es completamente un número)
parseInt("123abc")   //  123 (saca el número del principio)

Number("123.45")     //  123.45 (número completo)
parseInt("123.45")   //  123 (solo la parte entera)

// 5. Diferència entre null i undefined. 
let noLoSe;              
let intencionalmente = null;  

// 6. Comparació entre igualtat estricta i no estricta.


// 7. Ús de l’operador condicional ?. Comparació amb estructura if clàssica. 
let edat = 18;
let missatge = edat >= 18 ? "Major d'edat" : "Menor d'edat";
console.log(missatge);

// Equivalent amb if
if (edat >= 18) {
    missatge = "Major d'edat";
} else {
    missatge = "Menor d'edat";
}
console.log(missatge);

// 8. Ús de l’operador nullish coallescing. 
let nom = null;
console.log(nom ?? "Anònim"); 

// 9. Break i continue
for (let i = 0; i < 5; i++) {
    if (i === 2) continue; 
    if (i === 4) break;    
    console.log(i);
}

// 10. Funcions amb paràmetres per defecte. 
let frutas = ["manzana", "banana", "naranja"];

// Forma clásica (estilo C):
for (let i = 0; i < frutas.length; i++) {
    console.log("Posición " + i + ": " + frutas[i]);
}

// Forma moderna:
for (let fruta of frutas) {
    console.log("Fruta: " + fruta);
}

// 11.Funcions amb paràmetres per defecte. 
function saludar(nombre = "Anónimo") {
    return "Hola " + nombre;
}

saludar("María");  
saludar();         

// 12.Funció passada com a paràmetre a una altra funció. 
function sumar(a, b) {
    return a + b;
}

function calcular(x, y, operacion) {
    return operacion(x, y);  
}

calcular(5, 3, sumar);  

// 13.Hoisting en declaracions de funcions vs hoisting en expressions de funcions.
// DECLARACIÓN (funciona con hoisting):
console.log(miFuncion());  //  Funciona antes de declarar

function miFuncion() {
    return "¡Hola!";
}

// EXPRESIÓN (NO funciona con hoisting):
console.log(otraFuncion());  //  Error

var otraFuncion = function() {
    return "¡Hola!";
}; 

// 14.Traducció d’una funció en notació clàssica a la notació fletxa (funcions d’una línia de codi i funcions 
// de més d’una línea de codi). 
// Clásica:
function doblar(x) {
    return x * 2;
}

// Flecha (más moderna):
const doblar = x => x * 2;

// 15. Assignació a una variable d’una cadena de text multi-línia. 
let texto = `Esta es una línea
Esta es otra línea
Y otra más`;

// También puedes poner variables:
let nombre = "Juan";
let mensaje = `Hola ${nombre},
¿cómo estás?`;

// 16.Cas en que no posar punt i coma al final de la sentència da que es produeixi un error. 
