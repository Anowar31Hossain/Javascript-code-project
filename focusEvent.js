
var input = document.querySelector("input");

input.addEventListener("blur",function (e){
    // console.log("blur is occured.");
    // input.style.backgroundColor = "transparent";
    // input.style.padding = "0rem";
    // console.log(e.target.value);
    input.value = e.target.value.toUpperCase();


});


// input.addEventListener("focus",function (){
//     // console.log("focused");
//     input.style.backgroundColor = "blue";
//     input.style.padding = "2rem";
// });


// input.addEventListener("focusin",function (){
//     console.log("focusin is occured.");
// });


// input.addEventListener("focusout",function (){
//     console.log("focusout is occured.");
// });






