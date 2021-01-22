// https://github.com/Forroukh/Assignment3.js


//Function(1)  Kilometer to Meter
var meter = 10;
function kilometerToMeter(meter) {
    var  kilometer = meter*1000;
    return kilometer;
}
var meterCalculation = kilometerToMeter(197);
console.log(meterCalculation);
//Function(2)  Budget Calculator
function budgetCalculator (watch, mobile, laptop){
    var result1 = watch * 50;
    var result2 = mobile * 100;
    var result3 = laptop * 500;
    var total = result1 + result2 + result3;
    return total;
}
console.log(budgetCalculator(1,1,1));

//Function (3) hotelCost
function hotelCost (timeSpent){
    var cost = 0;
    if (timeSpent <= 10){
        cost = timeSpent * 100;
    }else if (timeSpent <= 20){
        var firstDays = 10* 100;
        var remaining = timeSpent - 10;
        var secondDays = remaining * 80;
        cost = firstDays + secondDays;
    
    }else{
        var firstDays = 10*100;
        var secondDays = 10*80;
        var remaining = timeSpent - 20;
        var lastDays = remaining * 50;
        cost = firstDays + secondDays + lastDays
    }
    return cost;
}


console.log(hotelCost(21));

//Function (4) megaFriend
var friends = ["Rakib", "Sakib", "Hashib", "Rahi", "Alif", "Arif"]
function megaFriend (arr){
    var result = '';
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element.length > result.length){
            result = arr[i];
        }
        
    }
    return result;
}
console.log(megaFriend(friends));