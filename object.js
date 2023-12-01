function student(name,roll,age,cgpa){
    this.name=name;
    this.roll=roll;
    this.age=age;
    this.cgpa=cgpa;
    this. display=function(){
        console.log("Name:",this.name);
        console.log("Roll:",this.roll);
        console.log("Age:",this.age);
        console.log("CGPA:",this.cgpa);
    }
}
var student1=new student("Anowar",2104031,22,3.55);
var student2=new student("Afsun Ehsan Chand",2104033,23,3.65);
console.log("1st student information:");
student1.display();
console.log("2nd student information:");
student2.display();