
window.addEventListener("load",function(){
    console.log("load");
});

window.addEventListener("unload",function(){
    console.log("unload");
});


window.addEventListener("scroll",function(){

    console.log("scrolled");
});

window.addEventListener("resize",function(){
    let width = window.outerWidth;
    let height = window.outerHeight;

    console.log(`height:${height}, width: ${width}`)
});

//toggle-detals
let details = document.querySelector("details");
details.addEventListener("toggle",function(e){
    console.log(e.target.open);
});



