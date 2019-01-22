var array1 = [2,4,6,8,9,0];
var array2 = [6,8,9];
let difference = array1.filter(x => !array2.includes(x));
console.log(difference);