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
newCard.addEventListener('click', removeCard);
// newCard.addEventListener('click', toggleStar);



function populateCard(idea) {
  var cardPlaceHolder = document.createElement("div");
  newCard.prepend(cardPlaceHolder);
  cardPlaceHolder.innerHTML = 
        `<article class = "idea-article" data-id="${idea.id}">
        <header>
        <input type="button" data-star=${idea.star} id="star-button" class="star-button icon-button" alt="star button">
          <input type ="image" class="close-the-card icon-button" src ="images/menu-close.svg" alt="x button">
        </header>
          <h2 contenteditable="true">${idea.title}</h2>
          <p contenteditable="true">${idea.body}</p>
        <footer>
          <input type ="image" id="upvote-button" class="icon-button" src="images/upvote.svg" alt="upvote icon">
          <span>Quality: ${qualityLevels[idea.quality]}</span>
          <input type ="image" id="downvote-button" class="icon-button" src="images/downvote.svg" alt="downvote icon">
        </footer>
        </article>`

  document.addEventListener('click', function (event) {
  if (!event.target.matches('#star-button')) return;
  event.preventDefault();
  toggleStar();
  
}, false); 

};

function toggleStar(){
  var starTarget = newCard.querySelector('#star-button');
  starTarget.classList.toggle('star-button');
  starTarget.classList.toggle('star-active');
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
}; 

function createIdea() {
  var idea = instantiateIdea();
  populateCard(idea);
  clearFields();
};

function restoreIdeas() {
  ideaArray = ideaArray.map(function(oldIdea) {
  var restoredIdea = new Idea(oldIdea.title, oldIdea.body, oldIdea.id, oldIdea.quality, oldIdea.star);
  populateCard(restoredIdea);

    return restoredIdea;
  });
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

function removeCard(event) {
  if (event.target.className === "close-the-card icon-button") {
    event.target.parentElement.parentElement.remove();
  }
};



// var element = document.section.querySelector('.idea-field[data-id="1554415384186"]')
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