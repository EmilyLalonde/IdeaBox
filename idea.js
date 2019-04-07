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

  updateIdea() {
  var parsedItems = JSON.parse(localStorage.getItem('ideaArray'));
  var itemIndex = parsedItems.findIndex(function(idea) {
    return idea.id === targetIdea;
  });
  // parsedItems.splice(itemIndex, 1, NEW IDEA)



  }



//   updateIdea() {
//     // localStorage.setItem('somethingComplicated', { crust: 'deep dish', type: 'veggie' });
//   }
//   updateQuality() {


// // add upVoteIdea;
// // add downVoteIdea;

  
}
