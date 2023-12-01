var num=new Array();
var sum=0;
for(var i=0;i<5;i++){
    num[i]=parseInt(prompt("Enter a number:"));
}
for(var i=0;i<5;i++){
    document.write(num[i]+"<br/>");
    sum+=num[i];
}
document.write("Summation is:"+sum);