let findGcd = (number1, number2) => {
    const commonDenomArr = []

    let smallerNum = number1 < number2 ? number1:number2

    // console.log("the smaller number of the two is:",smallerNum);

    for (let i = 0; i < number1+1; i++) {
        if (number1 % i === 0 && number2 % i === 0) {
            commonDenomArr.push(i)
        } 
    }

    return Math.max(...commonDenomArr);
    
    };
    
    function prime_factors(n) {
  /*
    Returns an array of prime factors that multiply to give the input integer n.
    */
   let set = new Set();
    let factArr = [];
    let div = 2;
    
    while (div <= n) {
        if (n % div == 0) {
        set.add(div);
        n = Math.floor(n / div);
        }
        else {
        div += 1;
        }
    }
    factArr = Array.from(set)
  
  return factArr;

    
    }
    
    let findGcdAndDecomposeToPrimeFactors = (number1, number2) => {
    
    const gdcValue = findGcd(number1, number2)
    
    const primeFactorArray = prime_factors(gdcValue);

    let obj = {"gdcValue":gdcValue,"primeFactorArray":primeFactorArray}

    return obj;
    
    // Step 3 code must be here
    
    };
    
    let result = findGcdAndDecomposeToPrimeFactors(14, 28);
    
    console.log(result);
    
    result = findGcdAndDecomposeToPrimeFactors(35, 15);
    
    console.log(result);
    
    result = findGcdAndDecomposeToPrimeFactors(100, 180);
    
    console.log(result);