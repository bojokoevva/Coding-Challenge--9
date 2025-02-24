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
