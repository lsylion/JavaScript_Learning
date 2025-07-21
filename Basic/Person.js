class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(`Person created: ${this.name}, Age: ${this.age}`);
    }

    
    set Name(name) {
        this.name = name;
    }
    // get cannot have parameters
    get Name() {
        return this.name;   
    }
    set Age(age) {
        this.age = age;
    }
    get Age() {
        return this.age;   
    }
    static displayInfo() {
        console.log("This is a static method in the Person class.");
    }
    
}

// Example usage
let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);
console.log(`Person 1: ${person1.Name}, Age: ${person1.Age}`);
console.log(`Person 2: ${person2.Name}, Age: ${person2.Age}`);

// Using static method
Person.displayInfo(); // Call static method

// also can create a empty person object
let person3 = new Person();
console.log(`Person 3: ${person3.Name}, Age: ${person3.Age}`);
person3.Name = "Charlie";
person3.Age = 35;
console.log(`Updated Person 3: ${person3.Name}, Age: ${person3.Age}`);
