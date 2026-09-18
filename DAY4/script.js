// create an obj employee with 
// name,slary and create a func to increase the salary using thi.
employee = {
    name: "John Doe",
    salary: 50000,
    displayInfo: function() {
        console.log(`Name: ${this.name}, Salary: ${this.salary}`);
    },
    increaseSalary: function(amount) {
        this.salary += amount;
    }
}
employee.displayInfo();
employee.increaseSalary(5000);
employee.displayInfo();