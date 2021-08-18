// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.getElementById('modal');
modal.classList.add("hidden");

function updateHeart(){
  let likes = document.getElementsByClassName("like-glyph");
  for(let like of likes){
    like.addEventListener('click', () => {
      mimicServerCall()
      .then((response) => {
        like.textContent = FULL_HEART;
      })
      .catch((error) => {
        document.getElementById('modal-message').textContent = error;
        modal.classList.remove("hidden");
        setTimeout(function(){
          modal.classList.add("hidden");
        }, 3000);
      })
    })
  }
}

updateHeart();









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
