class st{
    static count=0;
    constructor(name, roll , marks){
        this.name=name;
        this.roll=roll;
        this.marks=marks;
        st.count+=1;
        
    }
    displayresult(){
        console.log("NAME:", this.name)
        console.log("ROLL:", this.roll)
        console.log("MARKS:", this.marks)
        if(this.marks>50) console.log("PASS")
            
}



}
let i=new st("VISHAL",44,80)
let k=new st("J",44,80)
let h=new st("bb",44,80)
console.log("NO OF ST ", st.count)
i.displayresult()
h.displayresult()
k.displayresult()