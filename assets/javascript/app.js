 $(document).ready(function() {

//APP STATE

//var that represents the total score 

var totalCorrect = 0;

var totalWrong = 0;










//EVENT MANAGEMENT 



$(".submit").on("click", function (){

		console.log("in the submit function");
		
		is_checked();
});




//APP LOGIC 

//click start and it starts the game




//counter starts to count down when you click "start" Counter is set to 30 seconds 




//There is a form with questions, and each question has four possible responses 




//The user selects one response for each question 






//look for a listener that gathers whether a radio button is selected 



function is_checked  (){
		

		var wharton_checked = document.getElementById("wharton").checked;
		
				
			if(wharton_checked){

				console.log("wharton is checked");

				totalCorrect++;
			}

			else{
				console.log("wharton is not checked");
				totalWrong++;
			}

		
		
		var amazement_checked = document.getElementById("amazement").checked;
		
				
			if(amazement_checked){

				console.log("amazement is checked");

				totalCorrect++;
			}

			else{
				console.log("amazement is not checked");
				totalWrong++;
			}

			
	

		var cat_checked = document.getElementById("cat").checked;
		
				
			if(cat_checked){

				//console.log("cat is checked");

				totalCorrect++;
			}

			else{
				//console.log("cat is not checked");
				totalWrong++;
			}

			

		var larsen_checked = document.getElementById("larsen").checked;
		
				
			if(larsen_checked){

				//console.log("larsen is checked");

				totalCorrect++;
			}

			else{
				//console.log("larsen is not checked");
				totalWrong++;
			}

	

	var cap_checked = document.getElementById("bottle-cap").checked;
		
				
			if(cap_checked){

				
				totalCorrect++;
			}

			else{
				console.log("cap is not checked");
				totalWrong++;
			}

			
	}
			

	/*var bovary_checked = document.getElementById("flaubert").checked;
		
				
			if(bovary_checked){

				console.log("bovary is checked");

				totalCorrect++;
			}

			else{
				console.log("bovary is not checked");
				totalWrong++;
			}

			console.log("wins is :" + totalCorrect);

			console.log("losses is :" + totalWrong);
				

	}

*/
 

//JQuery Methods show and hide to show and hide an element  $(containername).hide();
//$(containername).show();





//APP DISPLAY 


//When the timer hits zero, it tells you that you are done and the number of questions you got correct, the number of questions you got incorrect and the number of questions that you have unanswered 



//INITIALIZE APP 







console.log("I am in the console log");
    

});



//end of document ready function



