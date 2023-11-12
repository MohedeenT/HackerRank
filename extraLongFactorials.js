function extraLongFactorials(n) {
    // Write your code here
    let factorial = BigInt(1);
    while (n>1) {
        factorial*=BigInt(n)
        n--;
    }

    return String(factorial);

}

console.log(extraLongFactorials(25));