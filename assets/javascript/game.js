
$(document).ready(function(){
	//Create variables for crystals
	var pink = 1;
   	var purple;
   	var green;
   	var black;
	//create a counter that adds up the users guesses
	var counter = 0;
	var wins = 0;
   	var losses = 0;
   	//set random number between 19-120
   	randomNumber = 87;
    $("#number-to-guess").text(randomNumber);
	//create function to reset
	function reset() {
       randomNumber = Math.floor(Math.random() * 120) + 19;
       $("#number-to-guess").text(randomNumber);
       pink = 1;
       counter = 0;
	   randomizeNumbers();
	}
    
	//create function to randomize numbers
	function randomizeNumbers() {
        purple = Math.floor(Math.random()* 12)+1;
        $("#purple").attr("value", purple);

        green = Math.floor(Math.random()* 12)+1;
        $("#green").attr("value", green);

        black = Math.floor(Math.random()* 12)+1;
        $("#black").attr("value", black);
    }
    randomizeNumbers();
    //test randomizeNumbers
    console.log(purple, green, black);
 		
	//add values of crystals to counter when clicked
	$("#pink").on("click", function() {
		counter += pink;
		$("#counter").text(counter);
		gameOverTest(counter, randomNumber);
	});

	$("#purple").on("click", function() {
		counter += purple;
		$("#counter").text(counter);
		gameOverTest(counter, randomNumber);
	});

	$("#green").on("click", function() {
		counter += green;
		$("#counter").text(counter);
		gameOverTest(counter, randomNumber);
	});

	$("#black").on("click", function() {
		counter += black;
		$("#counter").text(counter);
		gameOverTest(counter, randomNumber);
	});

	//check if the game is over
	function gameOverTest(counter, randomNumber) {
	    if(counter === randomNumber) {
	        wins++;
	        $("#wins").text(wins);
	        reset();
	    }else if(counter > randomNumber) {
	        losses++;
	        $("#losses").text(losses);
	        reset();
	    if(counter >= randomNumber) {
	        reset();        
        }
    }
}
});
