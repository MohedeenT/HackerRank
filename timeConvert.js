function timeConversion(s) {
    let index = s.search(/AM/);
    console.log(index);
    let hour = s.slice(0,2);
    let newHour = hour;
    let convertedTime;
    
    if (index === -1){
        if (newHour !== '12')newHour = +hour+12
    } else{
        if (newHour === '12') newHour = '00'
    }

    // if (newHour === '12' && index !== -1) newHour = '00'

    convertedTime = s.replace(hour,newHour)
    convertedTime = convertedTime.slice(0,-2);

    return convertedTime

}

console.log(timeConversion('11:40:00PM'));