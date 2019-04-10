class Idea {

  constructor (title, body, id, quality = 0, star = false){
    this.title = title;
    this.body = body;
    this.id = id;
    this.quality = quality;
    this.star = star; 
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

  updateIdea(targetId, newTitle, newBody) {
  var parsedItems = JSON.parse(localStorage.getItem('ideaArray'));
  var itemIndex = parsedItems.findIndex(function(idea) {
    return idea.id === targetId;
  });
  targetId.title = newTitle;
  targetId.body = newBody;
  this.saveToStorage();
  };

  starToggle(targetId) {
  this.star = !this.star;
  }
  
};
