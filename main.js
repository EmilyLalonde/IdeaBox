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


function populateCard(idea) {
  var cardPlaceholder = document.createElement("div");
  newCard.prepend(cardPlaceholder);
  cardPlaceholder.innerHTML = 
        `<article data-id="${idea.id}" ><header>
        <input type="image" id="star-button" class="icon-button" src="images/star.svg" alt="star button">
          <input type ="image" class="close-the-card icon-button" src ="images/menu-close.svg" alt="x button">
        </header>
          <h2 contentEditable = "true">${idea.title}</h2>
          <p contentEditable = "true">${idea.body}</p>
        <footer>
          <input type ="image" id="upvote-button" class="icon-button" src="images/upvote.svg" alt="upvote icon">
          <span>Quality: ${qualityLevels[idea.quality]}</span>
          <input type ="image" id="downvote-button" class="icon-button" src="images/downvote.svg" alt="downvote icon">
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


function removeCard(e) {
  var removedIdea = new Idea ();
  if (e.target.className === "close-the-card icon-button") {
    e.target.parentElement.parentElement.remove();
  }
  var targetId = parseInt(e.target.parentElement.parentElement.dataset.id);
  console.log(targetId);
  removedIdea.deleteFromStorage(targetId);
}

function updateCard(e) {
  var idea = instantiateIdea();
  populateCard(idea);
  var targetIdea = parseInt(e.target.parentElement.parentElement.dataset.id);
  modifiedIdea.updateIdea(targetIdea);
}






