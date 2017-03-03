 $(document).ready(function() {

//APP STATE


//EVENT MANAGEMENT 

$(".submit").on("click", function (){

		console.log("in the submit function");

		is_checked();

	});


//APP LOGIC 

function is_checked  (){
		var lawrence_checked = document.getElementById("lawrence").checked;
		var waugh_checked = document.getElementById("waugh").checked;
		var wharton_checked = document.getElementById("wharton").checked;
		var forster_checked = document.getElementById("forster").checekd;

		console.log("In the is_checked function" + lawrence_checked );
	}


//look for a listener that gathers whether a radio button is selected 

//JQuery Methods show and hide to show and hide an element  $(containername).hide();
//$(containername).show();






//APP DISPLAY 


//INITIALIZE APP 


//click start and it starts the game



//counter starts to count down when you click "start" Counter is set to 30 seconds 



//There is a form with eight questions, and each question has four possible responses 




//The user selects one response for each question 




//When the timer hits zero, it tells you that you are done and the number of questions you got correct, the number of questions you got incorrect and the number of questions that you have unanswered 



console.log("I am in the console log");
    

});



//end of document ready function



