
function workbook(n, k, arr) {
    const matrix = [];
    for (const problems of arr) {
        
            const newArr = Array(problems)
            for (let i = 0; i < newArr.length; i++){
                newArr[i] = i+1
            }
            matrix.push(newArr)
        
    }
    return matrix;
}

console.log(workbook(5, 3,[4, 2, 6, 1, 10] ));