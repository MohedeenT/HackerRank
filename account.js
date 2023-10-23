class Account{
    constructor(balance){
        this.balance = balance
    }
    getBalance(){
        return this.balance
    }
    debit(amount){
        if (amount > this.getBalance()) {
            return `isufficient funds`
        }
        this.balance -= amount;
        return `new balance is ${this.getBalance()}`
    }
    credit(amount){
        this.balance += amount;
        return `new balance is ${this.getBalance()}`
    }
}

const Customer1 = new Account(5000);

console.log(Customer1.getBalance()); 

console.log(Customer1.credit(50000)); 

console.log(Customer1.debit(23000));

console.log(Customer1.debit(50000));

console.log(Customer1.getBalance()); 


