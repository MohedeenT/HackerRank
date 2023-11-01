function circularArrayRotation(a, k, queries) {

    const b = []

    if (k!== 1 && a.length % k === 0) {
        for (const index of queries) {
            b.push(a[index])
        }
        return b;
    }

    k = k % a.length

    for (let i = 0; i < k; i++) {
        let temp = a.pop();
        a.unshift(temp);
    }

    for (const index of queries) {
        b.push(a[index])
    }

    return b;

}

console.log(circularArrayRotation([3,4,5],1,[1,2]));