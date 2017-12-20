//set random number between 19-120
// window.onload = function() {
	var randomNumber = Math.floor((Math.random() * 120) + 19);
	//add this number to the html
	$(document).ready(function() {
	$("#number-to-guess").html(randomNumber);
	});

	//create a counter that adds up the users guesses
	var counter = 0;
	//create an array of the values for the crystals
	var crystalValues= [0, 0, 0, 0];
		for (var i = 0; i < crystalValues.length; i++) {
			//crystals are between 1-12
			crystalValues[i] = Math.floor((Math.random() * 12) +1);
		}

	console.log(crystalValues);

	//imageCrystal.attr("data-crystalvalue", crystalValues[i]);

	for (var i = 0; i < crystalValues.length; i++) {
	// Each imageCrystal will be given a data attribute called data-crystalValue.
	// This data attribute will be set equal to the array value.
		$(".img").attr("data-crystalvalue", crystalValues[i]);
		// $("#purple").attr("data-crystalvalue", crystalValues[1]);
		// $("#green").attr("data-crystalvalue", crystalValues[2]);
		// $("#black").attr("data-crystalvalue", crystalValues[3]);
		}
	// Lastly, each crystal image (with all it classes and attributes) will get added to the page.
 
	$(".img").on("click", function() {
	// Determining the crystal's value requires us to extract the value from the data attribute.
	// Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
	// Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
	// Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

		var crystalValue = $(this).attr("data-crystalvalue");
		crystalValue = parseInt(crystalValue);
		// We then add the crystalValue to the user's "counter" which is a global variable.
		// Every click, from every crystal adds to the global counter.
		counter += crystalValue;

		// All of the same game win-lose logic applies. So the rest remains unchanged.
		$("#counter").html(counter);

		if (counter === randomNumber) {
		  ++wins;
		  $(("#wins").html("Wins: " + wins));
		}

		else if (counter >= randomNumber) {
		  ++losses;
		  $(("#losses").html("Losses: " + losses));
		}

	});
//}
 