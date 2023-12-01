
// console.log(location.href);
// console.log(location.protocol);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.pathname);


// var select = document.querySelector(".location-div");
// var p1 = select.children[0];
// p1.textContent = location.href;

// var p2 = select.children[1];
// p2.textContent = location.protocol;


// var p3 = select.children[2];
// p3.textContent = location.hostname;


// var p4 = select.children[3];
// p4.textContent = location.port;


// var p5 = select.children[4];
// p5.textContent = location.pathname;

// var visitButton = document.querySelector("#visit");
// visitButton.addEventListener("click",function(){
//     location.assign("https://www.typingstudy.com");
// });

// alert("error here.");


// function deleteSomething(){
//     let value = confirm("Are you delete this?");

//     if(value){
//         console.log("deleted");
//     }
//     else{
//         console.log("not deleted");
//     }
// }

// deleteSomething();


function welcomeMessage(){

    let text;
    let name = prompt("Enter your name:");
    if(name==null || name==''){
        text = "no name found";
    }else{
        text = "welcome "+name;
    }
    let h1 = document.createElement("h1");
    let textnode = document.createTextNode(text);
    h1.appendChild(textnode);
    document.body.appendChild(h1);
}


welcomeMessage();

