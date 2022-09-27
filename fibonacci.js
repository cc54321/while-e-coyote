const prompt = require('prompt-sync')({sigint: true});

console.log(" How many fibonacci values would you like to see? ");
let n = number(prompt("enter a value for 'n' "));

let num0 = 0;
let num1 = 1;
let nextnum = 0;

let count = 0;

while (count < n)
{
console.log(num0);
nextnum = num0 + num1;
num0 = num1;
num1 = nextnum;
count = count + 1;

}
