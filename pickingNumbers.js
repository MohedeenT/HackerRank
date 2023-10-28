function pickingNumbers(a) {
    // Write your code here
    let longestSubArr = 0;
    let individualVals = new Set(a)

    for (const value of individualVals.values()) {
        console.log(value);
        const tempArr = a.filter((tempVal)=> tempVal === value || tempVal === value+1)
        if (tempArr.length > longestSubArr) longestSubArr = tempArr.length
        console.log(tempArr);
    }

    return longestSubArr;
}

console.log(pickingNumbers([1,7,8,2,2,9,3,4,5,1,2]));