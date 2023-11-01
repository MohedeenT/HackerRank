function viralAdvertising(n) {
    let likeTotal = 2;
    let shares = 2;
    for (let i = 1; i < n; i++) {
        let nextShares = Math.floor((shares * 3)/2);
        likeTotal += nextShares;
        shares = nextShares;
    }

    return likeTotal;

}

console.log(viralAdvertising(5));