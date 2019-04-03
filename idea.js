class Idea {

  constructor (title, idea, id) {
    this.title = title;
    this.idea = idea;
    this.id = id;
    this.star = false;
    this.quality = ["swill", "plausible", "genius"];
    for (var i=0; i<this.quality.length; i++) {
       if (this.quality === undefined) {
      return this.quality[0]; 
     }
    }
  }


  saveToStorage() {
    
  var stringifiedNewIdea = JSON.stringify(ideaArray);
  // console.log(stringifiednewIdea)
  localStorage.setItem('ideaArray', stringifiednewIdea)  
  console.log(localStorage.getItem('ideaArray'))
  
};
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
