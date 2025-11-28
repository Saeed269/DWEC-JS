// 1. Quina és la diferència de comportament entre aquests dos fragments de codi? Per què?
// Fragment A
// window.onload = ()=>{
//     // let items = document.querySelectorAll('.item');
//     // console.log(items.length);
//     // items[items.length-1].remove();
//     // console.log(items.length);
// }
// Fragment B
// window.onload = ()=>{
//     let items = document.getElementsByClassName('item');
//     console.log(items.length);
//     items[items.length-1].remove();
//     console.log(items.length);
// }

// getElementsByClassName és "live" i reflexa els canvis del DOM en temps real,
// mentre que querySelectorAll és "static" i manté una instantània del moment de la consulta


let llista = ["Cervantes", "Quevedo", "Lope de Vega", "Calderón"];

// La resta de tasques es fan a partir de la variable llista. Printa per consola, en cada cas, el resultat de l'operació.

// 2. Afegeix un element al final de la llista
llista.push("Luis");
console.log("2. push:", llista);

// 3. Elimina el darrer element de la llista
let eliminat = llista.pop();
console.log("3. pop:", llista);
console.log("   Element eliminat:", eliminat);

// 4. Elimina el primer element de la llista
let primerEliminat = llista.shift();
console.log("4. shift:", llista);
console.log("  Element eliminat:", primerEliminat);

// 5. Afegeix un element al principi de la llista
llista.unshift("Cervantes");
console.log("5. unshift:", llista);

// 6. Afegeix tres elements entre "Quevedo" i "Lope de Vega"
llista.splice(2, 0, "Marta", "Garcia", "León");
console.log("6. splice (afegir):", llista);

// 7. Elimina el segon i el tercer elements de la llista
let eliminats = llista.splice(1, 2);
console.log("7. splice (eliminar):", llista);
console.log("   Elements eliminats:", eliminats);

// 8. Crea una llista2 amb els dos darrers elements de la llista (mètode splice)
let llista2 = llista.splice(-2);
console.log("8. llista2 amb splice:", llista2);
console.log("   llista després del splice:", llista);

// 9. Crea una llista3 amb els dos darrers elements de la llista (mètode slice)
let llista3 = llista.slice(-2);
console.log("9. llista3 amb slice:", llista3);
console.log("   llista després del slice:", llista);

// 10. Concatena llista3 al final de llista2
llista2 = llista2.concat(llista3);
console.log("10. concat:", llista2);

// 11. Assigna llista2 a un nou array llista4 i comprova que la còpia s'ha fet per referència


// 12. Comprova si llista2 i llista4 tenen els mateixos elements
function arraysIguals(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
console.log("Tenen els mateixos elements?", arraysIguals(llista2, llista4));

// 13. Comprova si llista4 és un array.


// 14. Serveix aquesta instrucció per eliminar correctament l'element de la llista

// 15. Elimina el 2n element de la llista4
llista4.splice(1, 1);
console.log("15. Eliminar 2n element amb splice:", llista4);

// 16. Printa per consola els elements de llista4, un a un
console.log("16. Elements de llista4 (for...of):");
for (let element of llista4) {
    console.log("   ", element);
}
  
// 17. Printa per consola les claus de llista4, una a una
console.log("17. Claus (índexs) de llista4 (for...in):");
for (let clau in llista4) {
    console.log("   ", clau, "=>", llista4[clau]);
}

// 18. Fes servir el mètode forEach per printar per consola tots els elements de 
console.log("18. Elements amb forEach:");
llista4.forEach((element, index) => {
    console.log(`    [${index}] ${element}`);
});

// 19. Ordena alfabèticament la llista4
llista4.sort();
console.log("19. Ordenació alfabètica:", llista4)

// 20. Ordena la llista4 pel nombre de lletres de cada element, de menor nombre de lletres a major
llista4.sort((a, b) => a.length - b.length);
console.log("20. Ordenació per longitud:", llista4);