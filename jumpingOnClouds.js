function jumpingOnClouds(c, k) {
    let energy = 100;
    
    if(c.length===k) return c[0]===0 ? energy-1 : energy-3;

    for (let i = k; i < c.length; i =((i+k) % c.length)) {
        c[i] === 0 ? energy-- : energy -= 3;
        if (i===0) break;
    }
    return energy;
}

console.log(jumpingOnClouds([1,1,1,0,1,1,0,0,0,0],10));