"use strict";
/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

/*
The explanation for this behavior is the closure.

The closure is useful here because, by the time the callback function on the addEventListener is executed, this IIFE(Immediately Invoked Function Expression) 
has already been executed, and with it, the Header variable is also gone. But, even though the environment in which this function was created is already gone,
it's still able to access the variable that were created by the time it was 'born'. This happens because of Closure.
*/
