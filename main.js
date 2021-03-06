
var newTitle = document.querySelector('#title-input');
var newBody = document.querySelector('#body-input');
var submitButton = document.querySelector("#submit-input");
var closeTheCard = document.querySelector('.close-the-card');
var upvoteButton = document.querySelector('.quality-up-img');
var downvoteButton = document.querySelector('.quality-down-img');
var newCard = document.querySelector('.idea-field');
var ideaArray = JSON.parse(localStorage.getItem('ideaArray')) || [];
var qualityLevels = ["swill", "plausible", "genius"];
var searchButton = document.querySelector('#search-button');
var searchInput = document.querySelector('#search-input');

submitButton.addEventListener('click', createIdea);
submitButton.addEventListener('click', handleSubmitButton);
window.addEventListener('load', restoreIdeas);
window.addEventListener('load', handleSubmitButton);
newTitle.addEventListener('keyup', handleSubmitButton);
newBody.addEventListener('keyup', handleSubmitButton);
newCard.addEventListener('click', updateStar); 
newCard.addEventListener("input", updateIdeaCard)
searchButton.addEventListener('click', searchFilter);
searchInput.addEventListener('keyup', searchFilter);
newCard.addEventListener('click', function(e) {
  if (e.target.className === "close-the-card icon-button") {
    e.target.parentElement.parentElement.remove();
    var removedIdea = new Idea();
    var targetId = parseInt(e.target.parentElement.parentElement.dataset.id);
    removedIdea.deleteFromStorage(targetId); 
  }
});  
window.addEventListener('load', greetingMessage);
newCard.addEventListener('mouseover', greetingMessage);
newCard.addEventListener('click', upvoteCard);


function greetingMessage(e){
  var greeting = document.querySelector('.greeting');
  if (ideaArray.length !==0) {
  greeting.setAttribute("hidden", true)
  } else { 
    greeting.removeAttribute("hidden", true)
  }
 };   


function populateCard(idea) {
  var cardPlaceholder = document.createElement("div");
  newCard.prepend(cardPlaceholder);
  cardPlaceholder.innerHTML = 
        `<article data-id="${idea.id}" ><header>
        <input type="image" id="star-button" class="star-button icon-button ${idea.star}" src="images/star.svg" alt="star button">
          <input type ="image" class="close-the-card icon-button" src ="images/menu-close.svg" alt="x button">
        </header>
          <h2 contentEditable = "true" class="editable-title">${idea.title}</h2>
          <p contentEditable = "true" class="editable-body">${idea.body}</p>
        <footer>
          <img id="upvote-button" class="up-button icon-button" src="images/upvote.svg" alt="upvote icon">
          <span>Quality: ${qualityLevels[idea.quality]}</span>
          <img id="downvote-button" class="down-button icon-button" src="images/downvote.svg" alt="downvote icon">
        </footer>
        </article>`
};

function instantiateIdea (newIdea) {
  var newIdea = new Idea (newTitle.value, newBody.value, Date.now());
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

function restoreIdeas() {
  ideaArray = ideaArray.map(function(oldIdea) {
    var restoredIdea = new Idea(oldIdea.title, oldIdea.body, oldIdea.id, oldIdea.quality, oldIdea.star, oldIdea.starImg);
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

function updateIdeaCard(e) {
    var targetParent = e.target.parentElement;
    var parsedId = JSON.parse(targetParent.dataset.id);
    var textValue = e.target.innerText;
    var target = e.target;
    var targetId = ideaArray.find(function(idea) {
      return idea.id === parsedId;
    });
    targetId.updateIdea(targetId, target, textValue);
  };

function searchFilter(e) {
  e.preventDefault();
  removeCardFilter ()
  var searchText = searchInput.value;
  var textSearch = ideaArray.filter(function (idea) {
    return idea.title.toLowerCase().includes(searchText) || idea.body.toLowerCase().includes(searchText);
  });

  textSearch.forEach(function(card) {
    populateCard(card);
  })
};

function removeCardFilter () {
  newCard.innerHTML = '';
};

function updateStar(idea) {
  event.preventDefault();
  if (event.target.matches('#star-button')){
  var targetParent = event.target.parentElement.parentElement;
  var parsedId = parseInt(targetParent.dataset.id);
  var targetId = ideaArray.find(function(idea) {
  return idea.id === parsedId;
  })
  targetId.starToggle();
 } 
};

function upvoteCard(idea) {
  event.preventDefault();
  if (event.target.matches('#upvote-button')){
  var targetParent = event.target.parentElement.parentElement;
  var parsedId = parseInt(targetParent.dataset.id);
  var targetId = ideaArray.find(function(idea) {
  return idea.id === parsedId;
});
};  
};































