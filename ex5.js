function inverterString(string) {
    let stringInvertida = "";

    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }

    return stringInvertida;
}

let string1 = "Olá mundo!";
let string2 = "JavaScript";

let resultado1 = inverterString(string1);
let resultado2 = inverterString(string2);
console.log(`String 1 original: ${string1} / String 1 invertida: ${resultado1}`);
console.log(`String 2 original: ${string2} / String 2 invertida: ${resultado2}`);