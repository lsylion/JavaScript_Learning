class Employee{
    // var empId; is not valid in JavaScript
    // Use class properties instead
    empId;
    empName;
    // properties can be initialized directly or in the constructor, so no need for var or let, can be // directly

    // using hash to indicate private properties (not enforced in JavaScript, but a convention)
    #salary;
    // cannot use # in constructor parameters, so we use this.#salary = 50000; // initializing private property


    constructor(empId, empName) {
        this.empId = empId;         // this keyword refers to the current instance; right side is the parameter from the constructor
        this.empName = empName;
        this.#salary = 50000; // initializing private property
    }
    // only one constructor is allowed in a class

    display() {
        console.log(`Employee ID: ${this.empId}`);
        console.log(`Employee Name: ${this.empName}`);
        console.log(`Employee Salary: ${this.#salary}`); // accessing private property
        // using template literals for better readability       
      

    }
}


class Department extends Employee {
    // Department class inherits from Employee
    constructor(empId, empName, department) {
        super(empId, empName); // call the parent class constructor
        this.department = department; // additional property for Manager
        
    }
    displayDepartment() {
        super.display(); // call the parent class display method
        console.log(`Department: ${this.department}`); // display additional property
    }


}
let dept = new Department(103, "Alice Johnson", "HR");
console.log("Department Details:");
dept.displayDepartment(); // call the display method of Department class

// // create an instance of Employee class
// let emp1 = new Employee(101, "John Doe");
// let emp2 = new Employee(102, "Jane Smith");

// console.log("Employee 1 Details:");
// emp1.display();  // call the display method
// console.log("Employee 2 Details:");
// emp2.display();  // call the display method


/*
console.log("Accessing private property directly will throw an error:");
try {
    console.log(emp1.#salary); // This will throw an error because #salary is private
} catch (error) {
    console.error("Error accessing private property:", error.message);
}
*/



