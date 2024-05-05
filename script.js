// Define some variables
let employeeFirstName;
let employeeLastName;
let employeeSalary;

// Create an initially empty array to add to
let employeesArray = [];

// Creates a reference and event listener for the Add employee button
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Prompts user in browser to enter information and creates an object called employee which will be added to the Array
const collectEmployees = function() {
    employeeFirstName = prompt("First Name: ");
    employeeLastName = prompt("Last Name: ");
    employeeSalary = prompt("Salary: ");

    const employee = {
        firstName: employeeFirstName,
        lastName: employeeLastName,
        salary: parseInt(employeeSalary),
    };
    
    employeesArray.push(employee);

    // Asks if user wants to add another employee and will either continue adding or exit and display entries
    const confirmMsg = confirm("Do you want to add another employee");
      if(confirmMsg === true) {
        collectEmployees();
    
      } else {
        return;
      }
  return employeesArray
};


// Calculate and show the average salary from sum
const displayAverageSalary = function(sumSalary) {

  if (employeesArray.length === 0) {
    console.log("No employees added yet")
    return;
  } else {
  sumSalary = 0;
  for (let i=0; i<employeesArray.length; i++) {
  sumSalary += employeesArray[i].salary;
    }
  }

  const averageSalary = sumSalary / employeesArray.length;
  console.log(`The average salary between our ${employeesArray.length} employee(s) is $${averageSalary}.`);
}

// Selects a random employee and displays it
const getRandomEmployee = function() {
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex]
    console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

