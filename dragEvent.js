// DragEvent Object
// ondragstart
// ondrag
// ondragend
// ondragenter
// ondragleave
// ondragover
// ondrop

var input = document.querySelector("div");
var p = document.querySelector("p");

p.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("Text", e.target.id);

});

input.addEventListener("dragover", function (e) {
    e.preventDefault();
});

input.addEventListener("drop", function (e) {
    let id = e.dataTransfer.getData("Text");
    input.appendChild(document.getElementById(id));
    e.preventDefault();
});




