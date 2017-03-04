  $(document).ready(function() {

//APP STATE



var totalCorrect = 0;

var totalWrong = 0;

$("#mainDiv").hide();

$("#endDiv").hide();


var time = 46;

var intervalId;



//stopwatch object


/* var stopwatch = {
	time: 0,

	start: function(){

		console.log("stopwatch has started");

		counter = setInterval(stopwatch.count, 1000);

	},



	count: function() {

		stopwatch.time++;

		console.log(stopwatch.time);

		//var converted = stopwatch.timeConverter(stopwatch.time);

		//$("#display").html(stopwatch.time);
	}

	
//stopwatch object end 	
}

*/


//EVENT MANAGEMENT 

//click start and it starts the game

//counter starts to count down when you click "start" Counter is set to 30 seconds 



$("#startButton").click(function(){

	

	$("#startDiv").hide();

	$("#mainDiv").show();


	


	run();
	//setInterval(decrement, 1000);


	//setTimeout(ThirtySeconds, 1000 * 30);

	});


	function run(){


		intervalId = setInterval(decrement, 1000);

		
	}


$(".submitButton").click(function(){

	

	$("#mainDiv").hide();

	$("#endDiv").show();

	clearInterval(intervalId);


	});








$(".submitButton").on("click", function (){

		
		
		is_checked();
		displayScore();
});




//APP LOGIC 




	



function decrement(){

	time--;

	
	$("#show-number").html("<h2>" + time + "<h2>");

     if(time === 0){

	is_checked();
	displayScore();

	$("#mainDiv").hide();

	$("#endDiv").show();

	clearInterval(intervalId);

	}


}









//There is a form with questions, and each question has four possible responses 




//The user selects one response for each question 






//look for a listener that gathers whether a radio button is selected 


/*function ThirtySeconds () {

 			alert("You're out of time");

 			$("#mainDiv").hide();
 			$("#endDiv").show();
 			is_checked();
 			displayScore();


		}
*/




function is_checked  (){
		

		var wharton_checked = document.getElementById("wharton").checked;
		
				
			if(wharton_checked){

				

				totalCorrect++;
			}

			else{
				
				totalWrong++;
			}

		
		
		var amazement_checked = document.getElementById("amazement").checked;
		
				
			if(amazement_checked){

				

				totalCorrect++;
			}

			else{
				
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
				
				totalWrong++;
			}



	var bovary_checked = document.getElementById("bovary").checked;
		
				
			if(bovary_checked){

				
				totalCorrect++;
			}

			else{
				
				totalWrong++;
			}








//end of is_checked function 			
	}
			

 

//JQuery Methods show and hide to show and hide an element  $(containername).hide();
//$(containername).show();





//APP DISPLAY 

function displayScore  (){

$("#correct").html("<h3>" + totalCorrect + "</h3>");
$("#incorrect").html("<h3>" + totalWrong + "</h3>");

	}



//When the timer hits zero, it tells you that you are done and the number of questions you got correct, the number of questions you got incorrect and the number of questions that you have unanswered 



//INITIALIZE APP 









//end of document ready function

});





