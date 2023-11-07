function permutationEquation(p) {
    const inverseMap = {};
    const result = [];

    // Create an inverse map
    for (let i = 0; i < p.length; i++) {
        inverseMap[p[i]] = i + 1;
    }
    console.log(inverseMap);

    // Calculate the values for the permutation equation
    for (let x = 1; x <= p.length; x++) {
        result.push(inverseMap[inverseMap[x]]);
    }

    return result;
}

console.log(permutationEquation([5,3,4,2,1]));