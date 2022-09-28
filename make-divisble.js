const prompt = require('prompt-sync')({sigint: true});

let userinput = Number(prompt("enter a number for a variable"));
let userinput2 = Number(prompt("enter number for a variable y: "));
let output = Number();

output = userinput % userinput2;

while(output ! = 0){
    userinput++;
    console.log(userinput);
}
console.log(' $(userinput) is divisable by $(userinput2), ');
