class student{

    constructor(roll,name,add,m_no){
        this.roll=roll;
        this.name=name;
        this.add=add;
        this.m_no=m_no;
    }

    show(){
        console.log("Name:",this.name);
        console.log("ROLL:",this.roll);
        console.log("ADD:",this.add);
        console.log("MO:",this.m_no);
    }
}

let K=new student();
K.show();
let s=new student(88,"I","JI",22);
s.show();
