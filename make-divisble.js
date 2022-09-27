const prompt = require('prompt-sync')({sigint: true});

let userinput = number(prompt("enter a number for a variable"));
let userinput2 = number(prompt("enter number for a variable y: "));
let output = number();

output = userinput % userinput2;

while(output ! = 0){
    userinput++;
    console.log(userinput);
}
console.log(' $(userinput) is divisable by $(userinput2), ');
