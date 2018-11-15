console.log("Hello");

var randomNum;
var emeraldValue = 1;
var rubyValue = 3;
var diamondValue = 10;
var saphireValue = 5;

var Wins = 0;
var Loss = 0;

// Generate Random Number and set it on Screen
function randomNumber(){
    randomNum = Math.floor(Math.random() * 100);
    $("#Number").attr("placeholder", randomNum);
    console.log("number", randomNum)
    $("#RandomNumber").text("Number: " + randomNum)
  };
  

  function WinOrLoss(score, num){
    if(score > num)
    {
      console.log("Loss!!");
      $("#Loss-text").text("You Lose!");
    }
    else if (score === num){
      console.log("Win!!");
      $("#Wins-text").text("You Win!");
  }
  $("#Total-Score").text("Your total Score:"+score);
}

  $(document).ready(function() {
    var totalScore = 0;

    // create an event litener, that run this function
    $("#Emerald").on("click", function () {
      totalScore = totalScore + emeraldValue;
      console.log(totalScore);
      WinOrLoss(totalScore, randomNum);
    });
    $("#Ruby").on("click", function () {
      totalScore = totalScore + rubyValue;
      console.log(totalScore);
      WinOrLoss(totalScore, randomNum);
    });
    $("#Diamond").on("click", function () {
      totalScore = totalScore + diamondValue;
      console.log(totalScore);
      WinOrLoss(totalScore, randomNum);
    });
    $("#Saphire").on("click", function () {
      totalScore = totalScore + saphireValue;
      console.log(totalScore);
      WinOrLoss(totalScore, randomNum);
    });

  });
  console.log("Random"+randomNum);
  
  randomNumber();

 
