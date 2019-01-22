var myObj = [5, [22], [[14]], [[4]],[5,6]];
var str = myObj.toString();
var res =str.split(",").map(Number);
console.log(res);