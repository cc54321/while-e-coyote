const prompt = require('prompt-sync')({sigint: true});


let num = Number(prompt("enter some numbers(type 0 when complete):));

let sum = 0;

while(num > 0){
sum += num;
num = number(prompt('> '));
}
console.log(sum);
