// Screen
let screen = document.querySelector("input")
// chiffres
let chiffres = document.querySelector(".trio1").children
let chiffres2 = document.querySelector(".trio2").children
let chiffres3 = document.querySelector(".trio3").children
let chiffres4 = document.querySelector(".trio4").children
// Opperations
let attribut = document.querySelector("#opperator").children
let ati = Array.from(attribut)
let toClear = document.querySelector("#result").firstElementChild
toClear = screen.value = ("")
// compliation de variables
let allChiffres = [...chiffres,...chiffres2,...chiffres3,...chiffres4]
// Laboratory

function afficher(vari,vari1) {
    
    vari.forEach(el => {
    el.addEventListener("click",()=>{
        screen.value += el.innerText;
    })
    });
    vari1.forEach(el => {
    el.addEventListener("click",()=>{
        screen.value += el.innerText;
    })
    });
    
}

console.log(toClear);
afficher(allChiffres,ati)



