class Idea {

  constructor (title, body, id, quality = 0, star = false) {
    this.title = title;
    this.body = body;
    this.id = id;
    this.star = star;
    this.quality = quality;
  }


  saveToStorage() { 
  var stringifiedNewIdea = JSON.stringify(ideaArray);
  localStorage.setItem('ideaArray', stringifiedNewIdea);
  }

  
  deleteFromStorage(targetId) {
  var parsedItems = JSON.parse(localStorage.getItem('ideaArray'));
  var itemIndex = parsedItems.findIndex(function(idea) {
    return idea.id === targetId;
  });

  parsedItems.splice(itemIndex, 1);
  localStorage.setItem('ideaArray', JSON.stringify(parsedItems));
  }

  updateIdea(targetId, changedIdea, currentLocalStorage) {
  this.title = changedIdea;
  targetId["title"] = this.title
  // console.log(targetId)
  // var newLocal.push(targetId)
  // console.log("targetId should change to edited version", targetId)
  // console.log("this is the title", this.title)
  // console.log("this is the current localStorage", localStorage)
  var oldLocal = JSON.parse(localStorage.ideaArray);
  console.log("here is the old localStorage", oldLocal)
  // var newLocal = oldLocal.push(targetId);
  var newLocal = []

// currentLocalStorage is the objects that are NOT the card we want to change.
// targetId is our edited object
// newLocal will be our new localstorage that we will set. 
// we need to push the currentLocalStorage into the array with the targetId and then set that to local storage
//remove the old local storage.


  console.log(newLocal)
  localStorage.clear()
  localStorage.setItem('ideaArray', JSON.stringify(newLocal));
  }



//   updateIdea() {
//     // localStorage.setItem('somethingComplicated', { crust: 'deep dish', type: 'veggie' });
//   }
//   updateQuality() {


// // add upVoteIdea;
// // add downVoteIdea;

  
}
