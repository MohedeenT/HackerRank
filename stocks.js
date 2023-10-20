function getNetProfit(events) {
    let portfolio = {}
    let profit = 0;
    let query = []
    for (const event of events){
        let evnt = event.match(/BUY|SELL|CHANGE|QUERY/)
        let companyStart = event.indexOf(' ') + 1
        let companyEnd = event.lastIndexOf(' ')
        let company = event.slice(companyStart,companyEnd)
        let amount = Number(event.slice(companyEnd))

        switch (evnt[0]) {
            case 'BUY':
                portfolio[company] = (portfolio[company] || 0) + amount;
                break;
            case 'SELL':
                if (portfolio[company] && portfolio[company] >= amount) {
                    portfolio[company] -= amount;
                } else {

                }
                break;
            case 'CHANGE':
                if (portfolio[company]) {
                    profit += amount * portfolio[company];
                }
                break;
            case 'QUERY':
                query.push(profit);
                break;
            default:

                break;
        }
    }
    return query

}

console.log(getNetProfit(['QUERY','SELL hooli 9','CHANGE hooli 8','BUY appl 200', 'CHANGE appl -10','QUERY']));
