function bonAppetit(bill, k, b) {
    // Write your code here
    
    let billTotal = bill.reduce((total, value)=> total+value) 
    
    if(b === (billTotal- bill[k])/2){ 
        console.log('Bon Appetit');
    }else{
        console.log(bill[k]/2)
    }
    

}