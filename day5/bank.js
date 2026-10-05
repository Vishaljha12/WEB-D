class Bankacc{
    constructor(accNO,name,balance){
        this.accNO=accNO
        this.name=name
        this.balance=balance
    }
    withdraw(n){
        console.log("WITHDRWALING"<<n)
        this.balance-=n;
        console.log("NEWBALANCE:", this.balance)
    }
    deposit(n){
        console.log("DEPOSITING"<<n)
        this.balance+=n;
        console.log("NEWBALANCE:", this.balance)
    }
    static bankinfo(){
        console.log("ACCOUNT NO",this.accNO)
        console.log("NAME",this.name)
        console.log("balance",this.balance)

    }
}
let l=new Bankacc(455,"GG",90);
l.withdraw(5)
l.deposit(2)
Bankacc.bankinfo()