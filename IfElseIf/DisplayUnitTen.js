const prompt= require("prompt-sync")();
var n=parseInt(prompt("Enter Number like 1, 10 ,100...: "));
console.log("NUm is: ",n);


if (n == 1){
    console.log("Unit");
    
}
else if (n == 10){
    console.log("Ten");
    
}
else if (n == 100){ 
    console.log("Hundered");
    
}
else if (n == 1000){
    console.log("Thousand");
    
}
else if (n == 10000){ 
    console.log("Ten Thousand");
    
}
else
    console.log("enter valid input");