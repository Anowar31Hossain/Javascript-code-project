// clipboard event Object
// oncopy
// oncut
// onpaste

var input = document.querySelector("input");
var p = document.querySelector("p");

input.addEventListener("copy",function(){
    p.innerText ="you have copied.";
});

input.addEventListener("cut",function(){
    p.innerText ="you have cut.";
});

input.addEventListener("paste",function(){
    p.innerText ="you have paste.";
});