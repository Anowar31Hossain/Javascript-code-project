console.clear();
var select = document.querySelector("div");

select.addEventListener("click",function (e){
    //console.log("click is occured");
    //console.log(e);
    //console.log(e.target);
    //console.log(e.target.className);
    //console.log(e.target.id);
    //console.log(e.target.innerHTML);
    //console.log(e.target.innerText);


});

/*
select.addEventListener("dblclick",function (){
    console.log("dblclick is occured");
});


select.addEventListener("mousedown",function (){
    console.log("mousedown is occured");
});


select.addEventListener("mouseup",function (){
    console.log("mouseup is occured");
});


select.addEventListener("mouseenter",function (){
    console.log("mouseenter is occured");
});


select.addEventListener("mouseleave",function (){
    console.log("mouseleave is occured");
});

select.addEventListener("mouseover",function (){
    console.log("mouseover is occured");
});


select.addEventListener("mousemove",function (e){
    //console.log("mousemove is occured");
   // console.log("clientX:"+e.clientX+",clientY:"+e.clientY);
   console.log("offsetX:"+e.offsetX+",offsetY:"+e.offsetY);
});
*/

var buttons = document.querySelectorAll(".btn");
console.log(buttons);

Array.from(buttons).map((button) => {
    button.addEventListener("click",function (e){
        console.log(e.target.innerText);
    });
});
