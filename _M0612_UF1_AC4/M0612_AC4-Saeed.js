// 1. Saca por consola todo el contenido del body sin utilizar ningún método de document
console.log(document.body.innerHTML);
// 2. Saca por consola el texto del elemento #titulo sin utilizar ningún método de document
console.log(titulo.innerText);
// 3. Saca el contenido del tercer li usando el método querySelector
let tercerLi = document.querySelector('li:nth-child(3)');

// 4. Saca el contenido del tercer li usando el método querySelectorAll
let elementosLi = document.querySelectorAll('li');
let tercerLi = elementosLi[2];

// 5. Que ocurre cuando se ejecuta este comando. ¿Por qué?
// let elementos = document.querySelector('li');
// elementos[2].remove();
genera un error, ya que querySelector solo selecciona el primer elemento que coincide con el selector, por lo que elementos no es una lista sino un único elemento li. Deberia usar querySelectorAll para obtener una lista de elementos y luego acceder al tercero con el índice [2].

// 6. Que ocurre cuando se ejecuta este comando. ¿Por qué?
// let lista = document.querySelectorAll('ul');
// lista.remove();
let lista = document.querySelector('ul');
lista.remove(); 

// 7. Accede a la lista ul y borra el segundo de sus hijos, utilizando su propiedad children
let llista= document.querySelector('ul')
llista.children[1].remove();
// 8. Accede a la lista ul y borra el segundo de sus hijos, utilizando su propiedad childNodes
let llista2= document.querySelector('ul')
llista2.childNodes[3].remove();

// 9. Completa este código para que se ponga de color azul el hermano siguiente al primer elemento de la lista
// let elemento = document.querySelector('li:first-child');
elemento.nextElementSibling.style.color = "blue";

// 10. Completa este código para que se pongan de color azul él y todos sus hermanos
let elemento = document.querySelector('li:first-child');
elemento.parentElement.style.color = "blue";
for (let hijo of elemento.parentElement.children){
    hijo.style.color = "blue";
}


// 11. ¿Por qué no podemos acceder así al atributo 'tema' del #título?
// let titulo = document.querySelector('#titulo');
// console.log(titulo.tema);
console.log(titulo.getAttribute('tema'));

// 12. Saca por consola el valor del atributo 'tema' del #título
let titulo = document.querySelector('#titulo');
console.log(titulo.getAttribute('tema'));

// 13. Añade al título el atributo 'cfgs' con valor 'daw'
let titulo = document.querySelector('#titulo');
titulo.setAttribute('cfgs', 'daw');


// 14. Cambia el id del h3 sin utilizar el método setAttribute
let h3 = document.querySelector('h3').id = "viejoId";

// 15. ¿Este código añade correctamente la classe 'elem' a los elementos de la lista?
// let elementos = document.querySelectorAll('.item');
// for (let elemento of elementos){
//     console.log(elemento.className);
//     elemento.className = "elem";
//     console.log(elemento.className);
// }
let elementos = document.querySelectorAll('.item');
for (let elemento of elementos){
    console.log(elemento.className);
    elemento.classList.add("elem");
    console.log(elemento.className);
}

// 16. Añade correctamente a los elementos de la lista la clase "item"

// 17. ¿Es correcta la salida por consola?
// let primerElemento= document.querySelectorAll('.item')[0];
// primerElemento.classList.add("elem");
// console.log(primerElemento.className);

// 18. Añade un Cuarto Elemento al final de la lista
let lista = document.querySelector('ul');
let nuevoElemento = document.createElement('li');
nuevoElemento.textContent = "Cuarto Elemento";
lista.appendChild(nuevoElemento);


// 19. Añade un Elemento Cero al principio de la lista
// let lista = document.querySelector('ul');


// 20. Duplica el Tercer Elemento a continuación de éste en la lista
// let tercerElemento = document.querySelector("li:nth-child(3)");