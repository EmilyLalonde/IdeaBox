//create the global variables
var newTitle = document.querySelector('#title-input');
var newBody = document.querySelector('#body-input');
var submitButton = document.querySelector("#submit-input");
var starButton = document.querySelector('#star-button');
var closeTheCard = document.querySelector('.close-the-card');
var upvoteButton = document.querySelector('#upvote-button');
var downvoteButton = document.querySelector('#downvote-button');
var newCard = document.querySelector('.idea-field');
var ideaArray = JSON.parse(localStorage.getItem('ideaArray')) || [];
var qualityLevels = ["swill", "plausible", "genius"];

//add event listeners
submitButton.addEventListener('click', createIdea);
submitButton.addEventListener('click', handleSubmitButton);
window.addEventListener('load', restoreIdeas);
window.addEventListener('load', handleSubmitButton);
newTitle.addEventListener('keyup', handleSubmitButton);
newBody.addEventListener('keyup', handleSubmitButton);


function populateCard(idea) {
  var cardPlaceholder = document.createElement("div");
  newCard.prepend(cardPlaceholder);
  cardPlaceholder.innerHTML = 
        `<article data-id="${idea.id}" ><header>
        <img type="submit" id="star-button" src="images/star.svg" alt="star button" class="icon-button">
          <img src ="images/menu-close.svg" type ="submit" class="close-the-card icon-button"></img>
        </header>
          <h2>${idea.title}</h2>
          <p>${idea.body}</p>
        <footer>
          <img id="upvote-button" src="images/upvote.svg" alt="upvote icon" class="icon-button">
          <span>Quality: ${qualityLevels[idea.quality]}</span>
          <img id="downvote-button" src="images/downvote.svg" alt="downvote icon" class="icon-button">
        </footer>
        </article>`
//       winningCard.classList.add('border');
//       adjustRangesUponWin()
        
};

function instantiateIdea (newIdea) {
  var newIdea = new Idea (newTitle.value, newBody.value, Date.now());
  console.log(typeof ideaArray)
  ideaArray.push(newIdea);
  newIdea.saveToStorage(ideaArray);
  return newIdea;
};

function clearFields() {
  var newTitle = document.querySelector('#title-input');
  var newBody = document.querySelector('#body-input');
  newTitle.value = ""; 
  newBody.value = "";
} 

function restoreIdeas() {
  ideaArray = ideaArray.map(function(oldIdea) {
    var restoredIdea = new Idea(oldIdea.title, oldIdea.body, oldIdea.id, oldIdea.quality, oldIdea.star);
    populateCard(restoredIdea);
    return restoredIdea;
  });
};

function createIdea() {
  var idea = instantiateIdea();
  populateCard(idea);
  clearFields();
};

function handleSubmitButton(e){
 e.preventDefault()
  if(newTitle.value.length < 1 && newBody.value.length < 1){
    submitButton.disabled = true;
    submitButton.classList.add('disabled')

  } else {
    submitButton.disabled = false;
    submitButton.classList.remove('disabled')

  }
};


///retrieving the ideas - should be done here, not in idea.js
//ON PAGE RELOAD
//1. use a for loop to go through all the ideas
//2. getItem
//3. populate the DOM

// closeTheCard.addEventListener('click', function(e) {
//   if (event.target.className === 'closing-the-card') {
//     event.target.parentNode.parentNode.remove();
//   }
// }); 
// upvoteButton.addEventListener('click', upVodeIdea);
// downvoteButton.addEventListener('click', downVoteIdea)  

//functions will be defined as methods in the idea.js, inside the class
//functions to define: saveToStorage(), upVoteIdea(), downVoteIdea();