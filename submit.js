let form = document.querySelector("form");
let name = form.querySelector("div #name");
let email = form.querySelector("div #email");
let password = form.querySelector("div #password");


form.addEventListener("submit",formHandler);

function formHandler(e){
    e.preventDefault();
    var userInfo = {
        name:name.value,
        email:email.value,
        password:password.value,
        };
        console.log(userInfo);
}