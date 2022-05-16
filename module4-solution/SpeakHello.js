// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2
<<<<<<< HEAD
(function (window) {
=======

>>>>>>> 0dbf49bce859e5522bee244e21388d90e69326dd

// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
<<<<<<< HEAD
var helloSpeaker = {};
helloSpeaker.names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
=======
// var helloSpeaker =
>>>>>>> 0dbf49bce859e5522bee244e21388d90e69326dd

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Hello";

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
<<<<<<< HEAD
helloSpeaker.speak = function speak(name) {
=======
function speak(name) {
>>>>>>> 0dbf49bce859e5522bee244e21388d90e69326dd
  console.log(speakWord + " " + name);
}

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
<<<<<<< HEAD
window.helloSpeaker = helloSpeaker;
})(window);
=======
// xxxx.xxxx = helloSpeaker;
>>>>>>> 0dbf49bce859e5522bee244e21388d90e69326dd
