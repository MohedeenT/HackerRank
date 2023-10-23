function getMoneySpent(keyboards, drives, b) {

    if (b===1) return -1

    let total = -1;
    //filtering out items that cost more than the budget
    let filteredKb = keyboards.filter((price)=> price<b)
    let filteredD = drives.filter((price)=> price<b)
    console.log(filteredD,filteredKb);
    // trying all possible combinations to find the most expensive combo within budget
    for (const priceK of filteredKb) {
        for (const priceD of filteredD) {
            let tempPrice = priceK+priceD;
            if (tempPrice <= b && tempPrice > total) {
                total = tempPrice;
            }
        }
    }
    return total;
}

console.log(getMoneySpent([40,50,60], [5,8,12], 60));