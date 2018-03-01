// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
 	initCamera();
 	initGestures();
 	initRSVPForm();
}

/*$(function(){
    $("div.box").bind("taphold", tapholdHandler);
    
    function tapholdHandler(event){
      //get id of the event source
      
      $(event.target).addClass("taphold");
    }
  });*/

// init jQuery gestures  
function initGestures() {
	// add gestures listener here

	$(function(){
		$(".judge-img").bind("taphold", tapholdHandler);
		
		function tapholdHandler(event){
			//get id of the event source
			var targetIDPrefix = event.target.id;
			console.log("got prefix: "+ targetIDPrefix);
			//show bio
			$("#" + targetIDPrefix + "-bio").show();
			//$(event.target).addClass("taphold");
		}
	});
}

// init RSVP form submit listener
function initRSVPForm() {
  // add your code here
  $('#rsvpForm').submit(function(e){
  	e.preventDefault();
  	console.log("submitting form...");
  	var rsvpEmail = $('#rsvpEmail').val();

  	//send the POST request
  	$.post('addRSVP', {rsvpEmail: rsvpEmail}, postCallback);
  	console.log("at end of method1");
  });

  function postCallback(res){
  	alert("RSVP form successfully submitted!");
  	$('#rsvpEmail').val(''); //clear form
  }
}