function hurdleRace(k,height) {
    let maxHeight = Math.max(...height)
    return k>=maxHeight ? 0 : maxHeight-k;
}

console.log(hurdleRace(4,[1,3,6,5,2]));