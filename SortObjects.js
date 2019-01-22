var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
  //sorting with respect to title................  
library.sort(function(a, b){
    var titleA=a.title.toLowerCase(), titleB=b.title.toLowerCase()
    if (titleA < titleB) //sort string ascending
        return -1 
    if (titleA > titleB)
        return 1
    return 0 //default return value (no sorting)
});
console.log(library);

//to sort wrt library ID................................
// library.sort(function(a, b){
//     return a.libraryID-b.libraryID
// });