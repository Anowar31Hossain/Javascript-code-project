var numbers = [10,20,30,40];
console.log(numbers);
var arr=[];
/*
numbers.forEach(function(x){
    console.log(x);
});
numbers.forEach(function(x){
    arr.push(x*x);
});
console.log(arr);
numbers.forEach(function (x,index,arr){
    arr[index]=x+5;

})
console.log(numbers);
*/

var squareNumber =  numbers.map(function(x){
    return x*x;
 });
 console.log(squareNumber);



 var newarray = numbers.filter(function(x){
    return x>20;
 });
 console.log(newarray);


