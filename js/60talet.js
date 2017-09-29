/*_____________________________________________________________
	
	1960-talet: TV, Hänga gubbe, stadsministern
_______________________________________________________________*/

/********************************
	FRÅGA 3: TV
********************************/

//Get answer from user input and validate
function getTVAnswer() {
	//User input.
	var answer2 = document.getElementById("inputtext1").value;

	console.log("Ditt svar: " + answer2);

	//Compare input answer with acceptable answers
	if(answer2 == 'TV' || answer2 == 'tv'){
		//https://www.tjvantoll.com/2013/03/14/better-ways-of-comparing-a-javascript-string-to-multiple-values/
		console.log("Rätt svar!");
		document.getElementById("main").innerHTML = "Bra jobbat! Du gav rätt svar."; 
	}
	else{
		console.log("Försök igen..");
		document.getElementById("main").innerHTML = "Inte helt rätt svar.. Försök igen.";
	} 
}