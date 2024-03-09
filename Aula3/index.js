// const a = 10;

// if(a === "10"){
//     console.log("Entou no if")
// } else if (a === 10) {
//     console.log('Entrou no else if');
// } else {
//     console.log("Entrou no else");
// }

import PromptSync from "prompt-sync";

const prompt = PromptSync();

// Exercicio 1
let value = 10;
let months = 0;
let percentage = '10%';
let valueTarget = value * 3;

for(months = 0; months < valueTarget; months++){
    value = value + (value * percentage)
}

console.log(months);

//Exercicio 1 atualizado
let valueTyped = prompt('Digite um valor: ');
let monthsNecessary = 0;
let percentageUsage = prompt('Digite uma porcentagem: ');
let target = value * 3;

for(monthsNecessary = 0; monthsNecessary < target; monthsNecessary++){
    valueTyped = valueTyped + (valueTyped * percentageUsage)
}

console.log(monthsNecessary);


//Exercicio 2
let number = prompt('Digite um número: ');

for(let i = 0; i <= 10; i++){
    console.log(`${number} x ${i} = ${number * i}`);
}

