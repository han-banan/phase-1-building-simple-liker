// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM HAS LOADED")
})
// Add the `.hidden` class to the error modal in the HTML so it does not appear when the page first loads
const errorModal = (document.querySelector("#modal"))
errorModal.classList.add("hidden")

// call find likes
findLikes()

function findLikes(){
  const likeArr = document.querySelectorAll(".like-glyph")
  likeArr.forEach((singularLike) => {
    singularLike.addEventListener("click", () => console.log("YOU FOUND ME! LIKE!")) }
  )}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
