function utopianTree(n) {
    let height = 1;
    let summer = false;
    let cycles = 0;

    while (cycles < n) {
        summer ? height+=1 : height *= 2;
        summer = !summer;
        cycles++;
    }
    return height;
}

console.log(utopianTree(5));