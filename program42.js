var myvar = document.querySelector("h1");


myvar.addEventListener("mouseover",function (){
    myvar.classList.add("myclass");
});


myvar.addEventListener("mouseout",function (){
    myvar.classList.remove("myclass");
});