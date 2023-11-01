function saveThePrisoner(n, m, s) {
    const lastPrisoner = (s - 1 + (m - 1)) % n + 1;
    return lastPrisoner;
}

console.log(saveThePrisoner(5, 10, 2));