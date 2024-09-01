function isFibonacci(num) {
    if (num === 0 || num === 1) {
        return true;
    }

    let a = 0;
    let b = 1;
    let next = a + b;

    while (next <= num) {
        if (next === num) {
            return true;
        }
        a = b;
        b = next;
        next = a + b;
    }

    return false;
}

function checarFibonacci(num) {
    if (isFibonacci(num)) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
}

let numero1 = 34;
let numero2 = 35;
checarFibonacci(numero1);
checarFibonacci(numero2);
