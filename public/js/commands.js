// define the functions our commands will run.
var help = function() {
  window.open("/help.html");
};

var showTPS = function(type) {
  $('#tpsreport').show();
};

 // define the functions our commands will run.
 var hello = function() {
   var audio = document.getElementById("audio_hello_battlecruiser");
	 audio.play();
   console.log(audio);
 };

 // define the functions our commands will run.
 var helloDropship = function() {
   var audio = document.getElementById("audio_hello_dropship");
  audio.play();
   console.log(audio);
 };

 // define the functions our commands will run.
 var helloFirebat = function() {
   var audio = document.getElementById("audio_hello_firebat");
  audio.play();
   console.log(audio);
 };

 // define the functions our commands will run.
 var helloGhost = function() {
   var audio = document.getElementById("audio_hello_ghost");
  audio.play();
   console.log(audio);
 };
