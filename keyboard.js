var input = document.querySelector("textarea");


// input.addEventListener("keypress",function (){
//     console.log("keypressed");
// });


 input.addEventListener("keydown",function (e){
    // console.log("keydown");
    if(e.repeat){
        alert("do not repeat");
    }

});


// input.addEventListener("keyup",function (e){
//     // console.log("keyup");
//     console.log("Shift+"+e.key);
// });

