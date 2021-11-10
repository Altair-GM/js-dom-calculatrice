// Screen
let screen = document.querySelector("input")
// chiffres
let chiffres = document.querySelector(".trio1").children
let chiffres2 = document.querySelector(".trio2").children
let chiffres3 = document.querySelector(".trio3").children
let chiffres4 = document.querySelector(".trio4").children

// compliation de variables
let attribut = document.querySelector("#opperator").children
let ati = Array.from(attribut)
let toClear = document.querySelector("#result").firstElementChild
let igual = document.querySelector("#result").lastElementChild
let allChiffres = [...chiffres, ...chiffres2, ...chiffres3, ...chiffres4]
// Opperations
let plus = ati[0]
let moin = ati[1]
let multi = ati[2]
let divi = ati[3]

// compil opperations
let opperations = [plus, moin, multi, divi, igual]

// Laboratory

let afficher = (vari, vari1) => {

    vari.forEach(el => {
        el.addEventListener("click", () => {
            screen.value += el.innerText;
        })
    });
    vari1.forEach(el => {
        el.addEventListener("click", () => {
            screen.value += el.innerText;
        })
    });

}
// [[[[[[[CE]]]]]]]
toClear.addEventListener('click', () => {
    screen.value = ("")
})

afficher(allChiffres, ati)

let input1;
let input2;
let operator;
let answer;

opperations.forEach(e => {
    e.addEventListener("click", () => {
        if (e.innerText == "+") {
            input1 = parseInt(screen.value);
            screen.value = "";
            screen.value += "+ ";
            operator = "+"
        }
        if (e.innerText == "-") {
            input1 = parseInt(screen.value);
            screen.value = "";
            screen.value += "- ";
            operator = "-"
        }
        if (e.innerText == "*") {
            input1 = parseInt(screen.value);
            screen.value = "";
            screen.value += "* ";
            operator = "*"
        }
        if (e.innerText == "/") {
            input1 = parseInt(screen.value);
            screen.value = "";
            screen.value += "/ ";
            operator = "/"
        }
        // if (e.innerText == "C") {
        //     MyFunctions.del(screen);
        // }
        if (e.innerText == "=") {
            result();
        }
        
    })
});
let result = () => {
    input2 = parseInt(screen.value.split(" ")[1]);
    switch (operator) {
        case '+':
            answer = (input1 + input2);
            console.log(answer);
            screen.value = answer;
            break;
        case '-':
            answer = (input1 - input2);
            console.log(answer);
            screen.value = answer;
            break;
        case '*':
            answer = (input1 * input2)
            console.log(answer);
            screen.value = answer;
            break;
        case '/':
            answer = (input1 / input2);
            console.log(answer);
            screen.value = Math.round(answer);
            break;
    }
}