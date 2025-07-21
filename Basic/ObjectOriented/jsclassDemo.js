class Employee{
    // var empId; is not valid in JavaScript
    // Use class properties instead
    empId;
    empName;
    // properties can be initialized directly or in the constructor, so no need for var or let, can be // directly
    constructor(empId, empName) {
        this.empId = empId;         // this keyword refers to the current instance; right side is the parameter from the constructor
        this.empName = empName;
    }
    // only one constructor is allowed in a class

    display() {
        console.log(`Employee ID: ${this.empId}`);
        console.log(`Employee Name: ${this.empName}`);
        
    }
}