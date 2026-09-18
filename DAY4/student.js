// create an obj student with name ,marks and creqate two func add marks and display info using this.
student = {
    name: "Jane Smith",
    marks: 85,
    addMarks: function(newMarks) {
        this.marks += newMarks;
    },
    displayInfo: function() {
        console.log(`Name: ${this.name}, Marks: ${this.marks}`);
    }

}
student.displayInfo();
student.addMarks(10);
student.displayInfo();

function college(){
    console.log("Name:"+this.name);
    console.log("Id:"+this.Id);

}
dept={
    name:"AIML",
    Id:152,
    college:college
};
Class={
    name:"A",
    Id:15,
    college:college
};
dept.college();
Class.college();
