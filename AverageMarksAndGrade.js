var marks = [80,77,88,95,68];
var avg = 0;
for(i=0;i<marks.length;i++)
{
     avg = avg + marks[i];
}
avg= avg/5;
var grade;
if(avg<60)
    grade = "F";
else if(avg<70)
    grade = "D";
else if(avg<80)
    grade = "C";
else if(avg<90)
    grade = "B";
else 
    grade = "A";

console.log(grade);

