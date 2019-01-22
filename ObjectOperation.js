var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

console.log("Exercise 1................");
for(var key in myObj)
{
//Exercise 1................
    if(myObj[key].occupation=="Programmer")
    console.log(myObj[key]);
}
console.log("......Exercise 2....");
console.log("......................................................................");
//Exercise 2.......................
myObj.sort(function(a,b){
    return a.age - b.age;
});

console.log(myObj);

//exercise 3.......

console.log("......Exercise 3....");
console.log("......................................................................");

var objectOfObject = new Object();
var teamLeader = [];
var c = 0;
var programmer = [];
var d = 0;
for (var key in myObj) {
   if (myObj[key].occupation == "Team Leader") {
       delete myObj[key].occupation;
       teamLeader[c]   = myObj[key];
       // console.log(teamLeader[c]);
       c = c + 1;
   } else if (myObj[key].occupation == "Programmer") {
       delete myObj[key].occupation;
       programmer[d] = myObj[key];
       // console.log(programmer[d]);
       d = d + 1;
   }
}
objectOfObject.teamLeader = teamLeader;
objectOfObject.programmer = programmer;
console.log(objectOfObject);
//Exercise 4................................

console.log("Exercise 4");
var onlyNames = myObj.map(x => x.name);
console.log(onlyNames);