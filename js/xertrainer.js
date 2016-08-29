
//An ANonymous function
(function() {
	'use strict';

	<!--Animations init-->
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

// //bind methods
// User.prototype.loadLocalStorage = function() {

// };
// User.prototype.saveLocalStorage = function() {

// };

var Exercise = new function(exercise_name){
	this.id = 0;
	this.displayName = exercise_name;
	this.sequenceNumber = 0;
	this.prepTimeinMS = 0;
	this.sets = 0;
	this.setRestInMS = 0;
	this.reps = 0;
	this.repsRestinMS = 0;
	this.stats = [];
}
