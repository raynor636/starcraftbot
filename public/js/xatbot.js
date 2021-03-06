"use strict";

// first we make sure annyang started succesfully
if (annyang) {

 // define our commands.
 // * The key is the phrase you want your users to say.
 // * The value is the action to do.
 //   You can pass a function, a function name (as a string), or write your function as part of the commands object.
 var commands = {
   'help'         : help,
   'battle cruiser': hello,
   'dropship': helloDropship,
   'firebat': helloFirebat,
   'ghost': helloGhost
 };

 // OPTIONAL: activate debug mode for detailed logging in the console
 annyang.debug();

 // Add voice commands to respond to
 annyang.addCommands(commands);

 // OPTIONAL: Set a language for speech recognition (defaults to English)
 // For a full list of language codes, see the documentation:
 // https://github.com/TalAter/annyang/blob/master/docs/FAQ.md#what-languages-are-supported
 annyang.setLanguage('en');

 // Start listening. You can call this here, or attach this call to an event, button, etc.
 annyang.start();
} else {
 $(document).ready(function() {
   alert('browser unsupported use chrome');
 });
}
