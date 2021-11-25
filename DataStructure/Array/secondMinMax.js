// array declaration
const arr = [];

for ( let i=0; i < 10; i++ ) {
    arr[i] = Math.floor( Math.random() * 899) + 100;
}

console.log("Random Numbers in Array is : [" +arr+ "]");
let min = arr[0];
let max = arr[0];
let secondMin = 0;
let secondMax = 0;


for (i = 0; i < arr.length; i++) {
    if ( arr[i] < min ) {
        secondMin = min;
        min = arr[i];
    }
    else if ( arr[i] < secondMin && arr[i] != min ) {
        secondMin = arr[i];
    }
}

console.log("Second smallest number is: " +secondMin);

for (i = 0; i < arr.length; i++) {
       if ( arr[i] > max ) {
        secondMax = max;
        max = arr[i];
    }
    else if ( arr[i] > secondMax && arr[i] != max ) {
        secondMax = arr[i];
    }
}
console.log("Second largest number is: " +secondMax);
