//creating html element 

var myDiv = document.querySelector("#mydiv");



var heading1 = document.createElement("h1");
var text1 = document.createTextNode("This is heading 1");
heading1.appendChild(text1);
myDiv.appendChild(heading1);



var heading0 = document.createElement("h1");
var text0 = document.createTextNode("This is heading 0");
heading0.appendChild(text0);
var heading1 = document.getElementsByTagName("h1")[0];
myDiv.insertBefore(heading0,heading1);




//remove tag


var heading2 = document.getElementsByTagName("h1")[2];
myDiv.removeChild(heading2);


