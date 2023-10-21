function sockMerchant(n, ar) {

    if (n === 1) return 0;
    const colorTracker = {};

    for (const sockColor of ar) {

        colorTracker[sockColor] = (colorTracker[sockColor] || 0) + 1 
    }

    const arOfValues = Object.values(colorTracker);

    if (arOfValues.every((value)=> value === 1)) {
        return 0;
    }

    const pairs = arOfValues.filter((sockCount)=> sockCount !== 1).map((sockCount)=> Math.floor(sockCount/2)).reduce((total,value)=> total+value)

    return pairs;

}

console.log(sockMerchant(6,[10,20,30]));

