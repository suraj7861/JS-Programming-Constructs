const FLIP_COIN = (Math.floor(Math.random() )* 10) % 2;
console.log("Random value is : "+ FLIP_COIN);
let head = 1;
let tail = 0;
//check head or tail
if(head == FLIP_COIN)
    console.log("Coin Flip Result is HEAD");
else
    console.log("Coin Flip Result is Tail");