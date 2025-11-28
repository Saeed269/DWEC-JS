//   TASCA 1 EXPLICACIÓ:
//    
//    El bucle no acaba mai perquè hi ha un problema amb com s'incrementa la variable i.
//   
//    Quan escrivim i = 1 + (i++), el que passa és:
//    - Primer, i++ retorna el valor actual de i (que és 0)
//    - Després suma: 1 + 0 = 1
//    - I finalment assigna 1 a i
//    
//    Així que cada vegada que es repeteix el bucle, i sempre torna a valer 1
//    i mai arriba a 5 per sortir del bucle.
//   
//    Per arreglar-ho hauria de ser simplement: i++ o bé i = i + 1
//  

// TASCA 2: Funció checkSpam

function checkSpam(str) {
    
    let textMinuscules = str.toLowerCase();
    
    if (textMinuscules.includes('viagra') || textMinuscules.includes('xxx')) {
        return true;
    }
    return false;
}

// TASCA 3: Funció formatDate

function formatDate(date) {
    let ara = new Date();
    let diferencia = ara - date; 
    
    let segons = Math.floor(diferencia / 1000);
    let minuts = Math.floor(segons / 60);
    
    if (segons < 1) {
        return "right now";
    }
    
    if (segons < 60) {
        return segons + " sec. ago";
    }
    
    if (minuts < 60) {
        return minuts + " min. ago";
    }
    
    let dia = String(date.getDate()).padStart(2, '0');
    let mes = String(date.getMonth() + 1).padStart(2, '0');
    let any = String(date.getFullYear()).slice(-2);
    let hora = String(date.getHours()).padStart(2, '0');
    let minut = String(date.getMinutes()).padStart(2, '0');
    
    return dia + "." + mes + "." + any + " " + hora + ":" + minut;
}

alert("Ara mateix:", formatDate(new Date()));
alert("Fa 5 segons:", formatDate(new Date(Date.now() - 5000)));
alert("Fa 2 minuts:", formatDate(new Date(Date.now() - 120000)));
alert("31 desembre 2016:", formatDate(new Date(2016, 11, 31, 10, 0)));
alert("");

