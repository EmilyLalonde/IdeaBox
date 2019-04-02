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

//add event listeners
submitButton.addEventListener('click', saveToStorage);
closeTheCard.addEventListener('click', function(e) {
  if (event.target.className === 'closing-the-card') {
    event.target.parentNode.parentNode.remove();
  }
}); 
upvoteButton.addEventListener('click', upVodeIdea);
downvoteButton.addEventListener('click', downVoteIdea)  

//functions will be defined as methods in the idea.js, inside the class
//functions to define: saveToStorage(), upVoteIdea(), downVoteIdea();