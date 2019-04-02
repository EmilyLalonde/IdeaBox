// var assert = require('chai').assert;
// var Idea = require('../IdeaBox/idea.js');


//create the global variables
var newTitle = document.querySelector('#title-input');
var newBody = document.querySelector('#body-input');
var submitButton = document.querySelector("#submit-input");
var starButton = document.querySelector('#star-button');
var closeTheCard = document.querySelector('.close-the-card');
var upvoteButton = document.querySelector('#upvote-button');
var downvoteButton = document.querySelector('#downvote-button');
var newCard = document.querySelector('article');



function populateCard() {
  newCard.innerHTML += `<header>
        <img type="submit" id="star-button" src="images/star.svg" alt="star button" class="icon-button">
        <img src ="images/menu-close.svg" type ="submit" class="close-the-card icon-button"></img>
      </header>
      <h2>${newTitle.value}</h2>
      <p>${newBody.value}</p>
      <footer>
        <img id="upvote-button" src="images/upvote.svg" alt="upvote icon" class="icon-button">
        <span>Quality: Swill</span>
        <img id="downvote-button" src="images/downvote.svg" alt="downvote icon" class="icon-button">
      </footer>`





//   `<h3>CHALLENGER 1 
//       <span id='challenger-1-name'>${challenger1Name.value}</span> 
//       <span>vs</span> CHALLENGER 2 <span id='challenger-2-name'>
//       ${challenger2Name.value}</span></h3>
//       <span class="grey-line"></span>
//       <h2>CHALLENGER <span id='the-winner-id-number'>1</span> 
//       <span id='challenger-2-name'>${challenger1Name.value}</span></h2>
//       <h2 class='winner'>WINNER</h2>
//       <span class="grey-line"></span>
//       <div class='bottom-winning-card'>
//       <div class='guess-amount'>
//       <h3><span id="total-guesses">--</span> GUESSES</h3>
//       </div>
//       <div class='time'>
//       <h3><span>1.35</span> MINUTES</h3>
//       </div>
//       <div class='closing-button'>x</div>
//       </div>`;
//       winningCard.classList.add('border');
//       adjustRangesUponWin()
//       enableButtons()  
}



//add event listeners
// submitButton.addEventListener('click', saveToStorage);
submitButton.addEventListener('click', populateCard);






// closeTheCard.addEventListener('click', function(e) {
//   if (event.target.className === 'closing-the-card') {
//     event.target.parentNode.parentNode.remove();
//   }
// }); 
// upvoteButton.addEventListener('click', upVodeIdea);
// downvoteButton.addEventListener('click', downVoteIdea)  

//functions will be defined as methods in the idea.js, inside the class
//functions to define: saveToStorage(), upVoteIdea(), downVoteIdea();