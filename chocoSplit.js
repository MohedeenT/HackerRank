function birthday(s, d, m) {
    // Write your code here
    let lastSegmentStartPoint = s.length - m +1;
    let matchCount = 0;
    
    for(let i=0;i<lastSegmentStartPoint;i++){
        segmentSum = s[i];
        for (let j = i+1; j < m+i; j++) {
            segmentSum+=s[j]
        }
        if(segmentSum === d){
            matchCount++;
        } 
    }
    return matchCount;
}

console.log(birthday([2,2,4,3,1], 8, 3));