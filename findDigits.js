function findDigits(n) {
    let divisorDigits = 0;
    const arrayOfDigits = String(n).split('');

    for (const digit of arrayOfDigits) {
        if (+digit === 0) continue;
        if (n % +digit === 0) divisorDigits++ 
    }
    return divisorDigits
}

console.log(findDigits(124));