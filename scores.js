function breakingRecords(scores) {
    // Write your code here
    let minMax = [0,0];
    let min = scores[0];
    let max = min;

    console.log(min,max);
    
    for(let i=1;i<scores.length;i++){
        if(scores[i]<min){ 
            minMax[0]++;
            min = scores[i];
            }
        if(scores[i]>max){
            minMax[1]++;
            max = scores[i];
        }  
    }
    
    return minMax
}

console.log(breakingRecords([3,4,6,6,7,10])); 