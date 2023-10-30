function angryProfessor(k, a) {
    return a.filter((arrival)=> arrival <= 0).length >= k ? 'NO' :'YES';
}

console.log(angryProfessor(3,[-1,-3,4,2]));