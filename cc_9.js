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


// Task 3 - Created Company Class

class Company {
    constructor(name) {
        this.name = name; 
        this.employees = []; // Initialize an empty list to store employees
    }

    // Method to add an employee to the company
    addEmployee(employee) {
        this.employees.push(employee); // Add employee to the list
    }

    // Method to list all employees' details
    listEmployees() {
        this.employees.forEach(emp => console.log(emp.getDetails())); // Loop through employees and print details
    }
    calculateTotalPayroll() { //Task 4 - Calculates and returns the total payroll for all employees, including bonuses for managers
        return this.employees.reduce((total, employee) => total + employee.calculateAnnualSalary(), 0); 
    }

    promoteToManager (employee, teamSize) { //Task 5 -  Create a new Manager object based on the existing employee
        const index = this.employees.indexOf(employee); // Find the index of the employee in the company's employee list
        this.employees[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize); //Creating a Manager with the properties of employee saved at index
    }
}

// Creating an instance of Company and adding employees
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees(); // Display all employees in the company


//Task 4 - Implemented Payroll System
console.log(company.calculateTotalPayroll()); //Logging
    
    