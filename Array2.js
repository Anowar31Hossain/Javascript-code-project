/*
var names=new Array();

for(var i=0;i<5;i++){
    names[i]=prompt("Enter "+(i+1)+" no. name:");
}
document.write(names+"<br/>");
names.splice(2,1,"zim","abuu");
document.write(names+"<br/>");
names.splice(2,1);
document.write(names+"<br/>");
*/

/*var names=new Array();
names=["anowar","noyon","salma"];
console.log(names);
console.log(names.slice(1));*/
/*
var names=new Array();
names=["salma","noyon","anowar"];
console.log(names);
console.log(names.sort());
console.log(names.reverse());
*/
/*
var nums=new Array();
nums=[5,4,9,1,3,7]
console.log(nums);
console.log(nums.sort(function (a,b){
    return a-b;
})
)
console.log(nums.sort(function (a,b){
    return b-a;
})
)
*/
/*
var scores=new Array();
for(var i=0;i<5;i++){
    scores[i]=parseInt(prompt("Enter "+(i+1)+" no. name:"));
}
function highestScore(nums){
    var max=scores[0];
    var min=scores[0]; 
    for(var i=0; i<=scores.length;i++){
        if(max<scores[i]) max=scores[i]  ;
        if(min>scores[i]) min=scores[i]   ; 
    }
    console.log("Maximum number is :"+max);
    console.log("Minimum number is:"+min);
}
console.log(scores);
highestScore(scores);
*/



