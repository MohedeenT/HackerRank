function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let matchCount = 0;
    if (n === 1) {
        return matchCount;        
    }

    for(let i=0;i<n-1;i++){

        for (let j = i+1; j < n; j++) {
            if ((ar[i] + ar[j])%k ===0 ) matchCount++;
        }
        // if(segmentSum === d){
        //     matchCount++;
        // } 
    }
    return matchCount;
}

console.log(divisibleSumPairs(6,3,[1, 3, 2, 6, 1, 2])); 