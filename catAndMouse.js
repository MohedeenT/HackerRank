function catAndMouse(x, y, z) {
    // x is cat A , y is cat B, z is Mouse c
    let distCatA = Math.abs(x-z)
    let distCatB = Math.abs(y-z)

    if (distCatA === distCatB) return 'Mouse C'

    return distCatA > distCatB ? 'Cat B':'Cat A'; 

}

console.log(catAndMouse(1,2,3)); 