const prompt= require("prompt-sync")();
const n=parseInt(prompt("Enter  number: "));
console.log("Factorial is : ",n);
let fact = 1;    
for(let i = 1; i <= n; i++){    
    fact=fact*i;    
}    
console.log("Factorial of "+n+" is: "+fact);    
 