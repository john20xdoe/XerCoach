
//An ANonymous function
(function() {
	'use strict';

	new WOW().init();

	var exers = [];
	// var user = {};
	// var $home = $(".row#home");
	// var $exers = $(".row#exers");

	// $("#start").click(function(){
	// 	user = new User($("#username").val().trim());
	// 	if(!user.username) return;
	// 	else {
	// 		$("#user").text(user.username);
	// 		$home.fadeOut("fast");
	// 		$exers.toggleClass("hidden");
	// 	}
	// });
	$("form#frmAddNew").submit(function(e){
		e.preventDefault();
	});
	$("#add-new-button").click(function(){
		var x = $("form#frmAddNew").serializeArray();
		var exer = {};
 	   	$.each(x, function(i, field){
 	       exer[field.name] = field.value || "";
	    });
	    var newExer = new Exercise(exer); 
	    exers.push(newExer);
	    $("ul#results").append("<li class='list-group-item'>"+newExer.exercise_name + ":" + newExer.prepTimeinMS+ "</li>");
	    $("form#frmAddNew").trigger('reset');
	});

})();



// Custom classes

function User(username){
	if (username.trim()) {
		this.username = username;
		this.exercises = [];
		return this;
	}
	else return false;
};

function Exercise(formData){
	this.id = formData.id;
	this.exercise_name = formData.exercise_name;
	this.sequenceNumber = formData.sequenceNumber;
	this.prepTimeinMS = formData.prepTimeinMS;
	this.sets = formData.sets;
	this.setRestInMS = formData.setRestInMS;
	this.reps = formData.reps;
	this.repsRestinMS = formData.repsRestinMS;
	this.stats = [];
}

function saveToLocalStorage(exercise){


}