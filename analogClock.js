let hr = document.getElementById("hour");
let mn = document.getElementById("min");
let sc = document.getElementById("second");


function displayTime(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    var hRotation = 30*hh + mm/2;
    var mRotation = 6*mm;
    var sRotation = 6*ss;


    hr.style.transform = `rotate(${hRotation}deg)`;
    mn.style.transform = `rotate(${mRotation}deg)`;
    sc.style.transform = `rotate(${sRotation}deg)`;

}

setInterval(displayTime,1000);