// Task 1 - Created Employee Class

class Employee {
    constructor(name, id, department, salary) {  // Initialize employee properties
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

    getDetails() { // Method to get formatted employee details
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }

    // Method to calculate annual salary
    calculateAnnualSalary() {
        return this.salary * 12;  // Multiplying monthly salary by 12 to get annual salary
    }
}

// Creating an instance of Employee and testing methods
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);

console.log(emp1.getDetails());
console.log(emp1.calculateAnnualSalary());


// Task 2 - Created Manager Class with Inheritance

class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        // Call parent constructor to initialize inherited properties
        super(name, id, department, salary);
        this.teamSize = teamSize; // Additional property for managers indicating team size
    }

    // Overriding getDetails() to include team size
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }

    // Method to calculate bonus (10% of annual salary)
    calculateBonus() {
        return this.calculateAnnualSalary() * 0.1; // 10% of the annual salary
    }
}

// Creating an instance of Manager and testing methods
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);

console.log(mgr1.getDetails()); 
console.log(mgr1.calculateBonus()); 
