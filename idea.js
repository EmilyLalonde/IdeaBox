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
}

//   deleteFromStorage() {
//     // localStorage.removeItem('storeMePlease');

//   }
//   updateIdea() {
//     // localStorage.setItem('somethingComplicated', { crust: 'deep dish', type: 'veggie' });
//   }
//   updateQuality() {


// // add upVoteIdea;
// // add downVoteIdea;

  
// }
