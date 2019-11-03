"use strict"

let Variable_Name=['uday','ankush','mihir', ' rahul','shubham','sid']; 
//let Variable_Name=[10,20,30,40,50];


//To call any vlaue from  array using [0 ,1,2..]
console.log(Variable_Name[5]);

// replace values
 Variable_Name[1]="singh";
console.log(Variable_Name);


//length of Arrays
console.log(Variable_Name.length);


//Indexof any value
console.log(Variable_Name.indexOf(" rahul")) ; //.index and the value name


//join the vlaues , . - etc.
let result= Variable_Name.join("^");
console.log(result);

//push new value  to array and pop to take out this new vlaue is stored in new variable.
let result1=Variable_Name.push("india");
console.log(result1);
console.log(Variable_Name);
result1=Variable_Name.pop();
console.log(result1);

// concatenation add new values to array.
let Result_1=Variable_Name.concat("india", "pakistan","china");
console.log(Result_1);

console.log(Result_1.length);

let kai="1Z";
let jai="1A";
console.log(kai==jai);