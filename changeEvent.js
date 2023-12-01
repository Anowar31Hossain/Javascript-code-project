console.clear();

var input = document.querySelector("input[name=name]");
input.addEventListener("change", changeText);
function changeText(e) {
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.value);
}


var input = document.querySelectorAll("input[name=program]");
console.log(input);
Array.from(input).map((program) => {
    program.addEventListener("change",programHandler);
});
function programHandler(e){
    if(e.target.checked){
        console.log(e.target.value);
    }
}


var input = document.querySelector("#department");
input.addEventListener("change",handleDepartment);
function handleDepartment(e){
    console.log(e.target.value);
}

