
var audio;

for (var i = 0; i < 3; i++) {
    document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
        var text = this.innerHTML;
        audioControl(text);
        animation(text);          
    });
    
}


document.addEventListener("keypress",function (event){
    var text = event.key;
    audioControl(text);
    animation(text);

})

function audioControl(text) {
    if(audio){
        audio.pause();
        audio.currentTime=0;
    }

    switch (text) {
        case "a":
            audio = new Audio("sounds/a.mp3");
            audio.play();
            break;
            case "b":
            audio = new Audio("sounds/b.mp3");
            audio.play();
            break;
            case "c":
            audio = new Audio("sounds/c.mp3");
            audio.play();
            break;
    }
}


function animation(text){
    var selectedButton = document.querySelector("."+text);
    selectedButton.classList.add("anim");
    setTimeout(function (){
        selectedButton.classList.remove("anim");
    },1000)

}



