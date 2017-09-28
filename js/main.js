/********************************
	START PAGE
********************************/

//Show entire div after pressing a button
function showDiv() {
   document.getElementById('question1').style.display = "block";
   document.getElementById('welcome').style.display = "none";
}

//Show entire div after pressing a button
function showMap() {
   document.getElementById('map').style.display = "block";
   document.getElementById('page').style.display = "none";
}

/********************************
	FRÅGA 1: RYSSKRÄCKEN
********************************/

//Get answer from user input and validate
function getFirstAnswer() {
	//User input.
	var answer1 = document.getElementById("inputtext1").value;

	console.log("Ditt svar: " + answer1);

	//Compare input answer with acceptable answers
	if(answer1 == 'Ryssland' || answer1 == 'ryssarna' || answer1 == 'ryssar'){
		//https://www.tjvantoll.com/2013/03/14/better-ways-of-comparing-a-javascript-string-to-multiple-values/
		console.log("Rätt svar!");
		document.getElementById("main").innerHTML = "Bra jobbat! Du gav rätt svar."; 

		//call function 'Beata' after 5 seconds
		window.setTimeout(Beata(), 5000);
	}
	else{
		console.log("Försök igen..");
		document.getElementById("main").innerHTML = "Inte helt rätt svar.. Försök igen.";
	} 
}

/********************************
	INFO 1: BEATA
********************************/

//Show entire div after pressing a button
function Beata() {
	document.getElementById('question1step2').style.display = "block";
  	document.getElementById('question1').style.display = "none";
}

//Show entire div after pressing a button
function next() {
	document.getElementById('question1step3').style.display = "block";
  	document.getElementById('question1step2').style.display = "none";
}

//Show entire div after pressing a button
function clue1() {
	document.getElementById('question1step4').style.display = "block";
  	document.getElementById('question1step3').style.display = "none";
}

/********************************
	FRÅGA 2: FLYGLARM
********************************/

//Get answer from user input and validate
function correctAlarm(){
	console.log("Bra jobbat! Du gav rätt svar.");
	document.getElementById("main1").innerHTML = "Bra jobbat! Du gav rätt svar.";

	document.getElementById('question2').style.display = "block";
  	document.getElementById('question1step4').style.display = "none";

}

function wrongAlarm(){
	document.getElementById("main1").innerHTML = "Inte helt rätt svar.. Försök igen.";
}


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


/********************************
	FOOTER
********************************/
 $(document).ready(function() {

   var docHeight = $(window).height();
   var footerHeight = $('.footer').height();
   var footerTop = $('.footer').position().top + footerHeight;

   if (footerTop < docHeight) {
    $('.footer').css('margin-top', 10+ (docHeight - footerTop) + 'px');
   }
  });





