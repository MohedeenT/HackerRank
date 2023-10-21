function pageCount(n, p) {
    // Write your code here
    if(p === 1 || p === n) return 0;
    if(p === n-1 && n%2 ===0) return 1;
    let halfWay = n/2;

    return p > halfWay ? Math.floor((n-p)/2): Math.floor(p/2);

}

console.log(pageCount(6,5));