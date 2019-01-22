var input  = "06678";

var stringInput = input.split('');

var result="";
for(i=0;i<stringInput.length-1;i++)
{
    console.log("new string is" + stringInput[i]);
    result = result+stringInput[i];
    if(stringInput[i]%2==0 && stringInput[i+1]%2==0 ){
        result = result  + "-";
    }
}
result+=stringInput[stringInput.length-1];

console.log("new string is" + result);