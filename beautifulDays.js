function beautifulDays(i, j, k) {
    // Write your code here
    let beautifulDays = 0;
    
    while(i<=j){
        let reverseI = +String(i).split('').reverse().join('');
        let result = Math.abs(i - reverseI) / k;
        if (result === parseInt(result)) beautifulDays++;
        i++;
    }
    
    return beautifulDays;

}

console.log(beautifulDays(13,45,3));