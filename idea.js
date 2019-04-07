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


  deleteFromStorage() {

  var thisIdea = this.dataset.id;
  console.log(thisIdea);
    //get idea array out of storage

    // var currentIdea = ideaArray.findIndexOf(this.id);
    // ideaArray.splice(currentIdea)
    // console.log(ideaArray);
    //find index of the id of the current idea you want to delete
    //splice out that element 
    //put the array back into storage

    // var thisIdea = this.id;
    // var stringifiedNewArray = JSON.stringify(ideaArray)
    // localStorage.setItem('updatedIdeaArray', stringifiedNewArray);
}

};
//   updateIdea() {
//     // localStorage.setItem('somethingComplicated', { crust: 'deep dish', type: 'veggie' });
//   }
//   updateQuality() {


// // add upVoteIdea;
// // add downVoteIdea;

  
// }
