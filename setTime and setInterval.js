let button = document.querySelector(".mybutton");
let p = document.querySelector(".mypara");


// setTimeout(()=>{

//     console.log("hi");
// },1000);


// button.addEventListener("click",display);

// function display(){
//     p.textContent = "Your registration is succesfull.";
//     setTimeout(()=>{
//         p.textContent = "";
//     },2000);
// }

// button.addEventListener("click",timeInterval);
// function timeInterval(){
//     let count=0;
//     p.textContent = count;
//     setInterval(()=>{
//         count++;
//         p.textContent=count;


//     },1000)
// }


button.addEventListener("click", timeDisplay);

function timeDisplay() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    minutes = setTimeFormat(minutes);
    seconds = setTimeFormat(seconds);

    let time = hours + ":" + minutes + ":" + seconds;
    p.textContent = time;
    setInterval(timeDisplay, 1000);
}
function setTimeFormat(value) {
    if (value < 10) {
        value = "0" + value;
    }
    return value;
}