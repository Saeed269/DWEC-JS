// Tasca 1. Escriu una funció per sumar tots els salaris inclosos en un objecte salaries
// a) Fent servir la construcció for.. in simple.

let salaries = {
    John: 100, 
    Ann: 160, 
    Pete: 130
};

function sumaSalarisFor(obj) {
    let suma = 0;
    for (let clau in obj) {
        suma += obj[clau];
    }
    return suma;
}

console.log(sumaSalarisFor(salaries));

// b) Fent servir Object.keys + for.

function sumaSalarisKeys(obj) {
    let suma = 0;
    let claus = Object.keys(obj);
    for (let i = 0; i < claus.length; i++) {
        suma += obj[claus[i]];
    }
    return suma;
}

console.log(sumaSalarisKeys(salaries)); 

// c) Fent servir Object.values + for. 

function sumaSalarisValues(obj) {
    let suma = 0;
    let valors = Object.values(obj);
    for (let i = 0; i < valors.length; i++) {
        suma += valors[i];
    }
    return suma;
}

console.log(sumaSalarisValues(salaries));


// d) Fent servir Object.entries + for.

function sumaSalarisEntries(obj) {
    let suma = 0;
    let entrades = Object.entries(obj);
    for (let i = 0; i < entrades.length; i++) {
        suma += entrades[i][1];
    }
    return suma;
}

console.log(sumaSalarisEntries(salaries)); 


