// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2
<<<<<<< HEAD
(function (window) {
=======
>>>>>>> 0dbf49bce859e5522bee244e21388d90e69326dd


// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
<<<<<<< HEAD
var byeSpeaker = {};
byeSpeaker.name = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

=======
// var byeSpeaker =
>>>>>>> 0dbf49bce859e5522bee244e21388d90e69326dd

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var speakWord = "Good Bye";

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
<<<<<<< HEAD
byeSpeaker.speak = function speak(name) {
=======
function speak(name) {
>>>>>>> 0dbf49bce859e5522bee244e21388d90e69326dd
  console.log(speakWord + " " + name);
}

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
<<<<<<< HEAD
window.byeSpeaker = byeSpeaker;
})(window);
=======
// xxxx.xxxx = byeSpeaker;
>>>>>>> 0dbf49bce859e5522bee244e21388d90e69326dd
