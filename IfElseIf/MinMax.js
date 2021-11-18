const prompt = require("prompt-sync")();
const a = parseInt(prompt("Enter first num: "));
const b = parseInt(prompt("Enter Second num: "));
const c = parseInt(prompt("Enter Third num: "));
console.log("NUM's are: ",a,b,c);


//operations
let op1 = a + b * c;
console.log("operation 1 value is : "+op1);
let op2 = a % b + c;
console.log("operation 2 value is : "+op2);
let op3 = c + a / b;
console.log("operation 3 value is : "+op3);
let op4 = a * b + c;
console.log("operation 4 value is : "+op4);

//maximum operation value
if(op1 > op2 && op1 > op3 && op1 > op4)
    console.log("operation 1 is max : "+ op1);
else if(op2 > op1 && op2 > op3 && op2 > op4)
    console.log("operation 2 is max : "+ op2);
else if(op3 > op1 && op3 > op2 && op3 > op4)
    console.log("operation 3 is max : "+ op3);
else
    console.log("operation 4 is max : "+ op4);

//minimum operation value
if(op1 < op2 && op1 < op3 && op1 < op4)
    console.log("operation 1 is min : "+ op1);
else if(op2 < op1 && op2 < op3 && op2 < op4)
    console.log("operation 2 is min : "+ op2);
else if(op3 < op1 && op3 < op2 && op3 < op4)
    console.log("operation 3 is min : "+ op3);
else
    console.log("operation 4 is min : "+ op4);