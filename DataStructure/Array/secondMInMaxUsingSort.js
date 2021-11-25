//array declaration
const arr = [];
//random numbers
for ( let i=0; i < 10; i++ ) {
    arr[i] = Math.floor ( Math.random() * 899) + 100;
}
//unsorted array
console.log("unsorted array is: [" +arr+ "]");

//sorting array
let sortedArray = arr.sort();
console.log("sorted array is: [" +sortedArray+ "]");

//second smallest number in array
let secondMin = sortedArray[1]; // 1 is index
console.log("Second smallest number is: " +secondMin);

//second largest number in array
let secondMax = sortedArray.slice(-2,0); // .slice(start,end)
console.log("Second largest number is: " +secondMax);
