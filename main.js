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
// var modifiedTitle = document.querySelector('.editable-title');



//add event listeners
submitButton.addEventListener('click', createIdea);
submitButton.addEventListener('click', handleSubmitButton);
window.addEventListener('load', restoreIdeas);
window.addEventListener('load', handleSubmitButton);
newTitle.addEventListener('keyup', handleSubmitButton);
newBody.addEventListener('keyup', handleSubmitButton);
newCard.addEventListener('click', function(e) {
  if (e.target.className === "close-the-card icon-button") {
    e.target.parentElement.parentElement.remove();
    removeCard(e);
  }
});  
// newCard.addEventListener('mouseout', function(e){
//     if (e.target.className ==="editable-title") {
//     console.log("updating!!!!!");
//     modifyTitle(e)
//   }
// });


function populateCard(idea) {
  var cardPlaceholder = document.createElement("div");
  newCard.prepend(cardPlaceholder);
  cardPlaceholder.innerHTML = 
        `<article data-id="${idea.id}" ><header>
        <input type="image" id="star-button" class="icon-button" src="images/star.svg" alt="star button">
          <input type ="image" class="close-the-card icon-button" src ="images/menu-close.svg" alt="x button">
        </header>
          <h2 contentEditable = "true" class="editable-title">${idea.title}</h2>
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

  var targetId = parseInt(e.target.parentElement.parentElement.dataset.id);
  console.log(targetId);
  removedIdea.deleteFromStorage(targetId);
}

// function updateTitle(e) {
//     for(var i=0; i < parsedItems.length; i++) {
//       if(parsedItems[i].id === targetId) {
//         var newIdea = parsedItems[i];

    // var targetParent = e.target.parentElement;
    // console.log(targetParent)

    // var targetId = JSON.parseInt(targetParent.dataset.id);
    // console.log(targetId);
//         
//     }
//   }
// }



// function modifyTitle(e) {
//     var modifiedIdea = new Idea(newTitle.value);
//     var targetId = parseInt(e.target.parentElement.dataset.id);
//     console.log(targetId);
//     var changedIdea = e.target.textContent;
//     console.log("ChangedIdea!!", changedIdea)
//     var updatedID = ideaArray.find(function(idea) {
//     return idea.id === targetId;
//   });
//     var filteredIdeas = ideaArray.filter(function(idea){
//       return idea.id !== targetId
//     })
//     console.log("here is the filtered Ideas", filteredIdeas)
//     console.log("updatedID", updatedID)
//     modifiedIdea.updateIdea(updatedID, changedIdea, filteredIdeas);
//     console.log(modifiedIdea.updateIdea(updatedID, changedIdea))
//   }



// function updateCard(e) {
//   var idea = instantiateIdea();
//   populateCard(idea);
//   var targetIdea = parseInt(e.target.parentElement.parentElement.dataset.id);
//   modifiedIdea.updateIdea(targetIdea);
// }


newCard.addEventListener("mouseout", function(e) {
  if(e.target.className === "editable-title") {
    console.log("updating")
    updateTitle(e);
  }
})

function updateTitle(e) {
    var parsedItems = JSON.parse(localStorage.getItem("ideaArray"));
    var targetParent = e.target.parentElement;
    console.log(targetParent)
    var targetId = JSON.parse(targetParent.dataset.id);
    console.log(targetId);
    for(var i=0; i < parsedItems.length; i++) {
      if(parsedItems[i].id === targetId) {
        var newIdea = parsedItems[i];
        newIdea.title = e.target.textContent;
        parsedItems.splice(i, 1, newIdea);
        localStorage.removeItem("ideaArray");
        localStorage.setItem("ideaArray", JSON.stringify(parsedItems));
    }
  }
}















































