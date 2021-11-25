//calculate prime factors
function prime_factors(number) {
    //check factors are prime
    function is_prime(factor) {
      for (let i = 2; i <= Math.sqrt(factor); i++)
      {
        if (factor % i === 0) return false;
      }
      return true;
    }
    //declare array to store prime factors
    const primeFactorArray = [];
    for (let i = 2; i <= number; i++)
    {
      while (is_prime(i) && number % i === 0) 
      {
        if (primeFactorArray.indexOf(i) == -1) primeFactorArray.push(i);
        number = number / i;
      }
    }
    return primeFactorArray;
  }
  const prompt = require('prompt-sync')();
  let number = prompt("Enter a number to get prime factors: ");
  console.log(prime_factors(number));