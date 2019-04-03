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
var ideaArray =  JSON.parse(localStorage.getItem('ideaArray')) || [];


function populateCard() {
  newCard.innerHTML += 
        `<header>
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
//       winningCard.classList.add('border');
//       adjustRangesUponWin()
//       enableButtons()  
}

function instantiateIdea (newIdea) {
  var newIdea = new Idea (newTitle.value, newBody.value, Date.now());
  ideaArray.push(newIdea);
  var stringifiedNewIdea = JSON.stringify(newIdea);
  newIdea.saveToStorage(ideaArray);
  // localStorage.setItem('ideaArray', stringifiedNewIdea);
  console.log(newIdea);
};


///retrieving the ideas - should be done here, not in idea.js
//ON PAGE RELOAD
//1. use a for loop to go through all the ideas
//2. getItem
//3. populate the DOM

//add event listeners
submitButton.addEventListener('click', instantiateIdea);



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