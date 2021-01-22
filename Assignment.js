// Problem Number 1

function kilometerToMeter(distanceInKilo){
  let meter = distanceInKilo*1000;
    if(distanceInKilo < 0){
        console.log("Distance can not be negetive.");
    }
    else{
        return meter;
    }
}

let result = kilometerToMeter(125);
console.log(result);

// Problem Number 2



function budgetCalculator(totalClock, totalMobile, totalLaptop){
   let totalCost = totalClock*50 + totalMobile*100 + totalLaptop*500;  //1 clock = 50, 1 mobile = 100, 1 laptop = 500
    if(totalClock < 0 || totalMobile < 0 || totalLaptop < 0 ){
        console.log("Products quantity can not be negetive.")
    }
    else{
        return totalCost;
    }
    
}

let totalCost = budgetCalculator(2, -3, 4);

console.log(totalCost);

// Problem Number 3

  function hotelCost( days){
   
    if(days < 0) {
        console.log('Invalid input.')    
    }
    else{
        cost = 0;
    for(let d = 1; d <= days; d++){
        if(d <= 10) {
            cost += 100;
        } 
        else if(d <= 20) {
            cost += 80;
        }
        else{
            cost += 50;
        } 
    }
    return cost;
    }
    
}


let first = hotelCost(15);
console.log(first);

// Problem Number 4


function megaFriend(friendsName){
    let maxWord = '';
    for(let i = 0; i < friendsName.length; i++){
        if(friendsName[i].length > maxWord.length){
            maxWord = friendsName[i];
        }
    }
    return maxWord;
}

let friendsName = ['akkas', 'baten','kalu', 'sokhin', 'lulubu', 'kuddus' ];
let largestName = megaFriend(friendsName);
console.log(largestName);