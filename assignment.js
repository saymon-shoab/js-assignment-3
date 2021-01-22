


//problem=1  kilometer to meter start
function kilometerToMeter(km){
    var meter = km*1000;
    return meter
}

var dhakaToCoxMeter = kilometerToMeter(400);
console.log(dhakaToCoxMeter);

// kilometer to meter end




// problem2 budgetCalculator  start

function budgetCalculator(Watch,Phone,laptop){
    var Watch = Watch*50;
    var Phone = Phone*100;
    var laptop = laptop*500;
    var total = Watch+Phone+laptop;
    return total
  }
          
  var totalBudget =budgetCalculator (5,3,2);
  console.log(totalBudget);
  
  
  // budgetCalculator  end



  //problem=3 hotel cost start

function hotelCost(day){
   
    var cost= 0;
    if(day<=10){
        cost=day*100;
    }
    else if(day<=20){
        var firstPart =10* 100;
        var remaining=day-10;
        var secondPart = remaining* 80;
        cost = firstPart+secondPart;
    
    
    }
    else{
        var firstPart = 10* 100;
        var secondPart = 10* 80;
        var remaining  = day-20;
        var thirdPart = remaining*50;
        var cost = firstPart + secondPart + thirdPart;
    }
     return cost
    }
    
    
        var  totalCost = hotelCost(32);
        console.log(totalCost);
    
    
    
    //hotel cost end


    
// problem4 megaFriend start
function megaFriend(str){
    var bigWord = "";
    var words =str.split(" ");
    for (var i=0; i<words.length; i++){
        var remainWord =words[i]
        if(remainWord.length > bigWord.length){
         bigWord=remainWord;
        }
    }
    return bigWord
 }
 
 var dream = megaFriend("i want to became a web developer");
 console.log(dream);
 // megaFriend end