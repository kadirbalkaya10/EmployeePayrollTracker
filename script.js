// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let employees = []; // Setting an empty array for employess.That will get input from user

  // We have add employees until user choice to not add more. So we have use while loop, While(statment){do}.
  while (confirm('Would you like add an other employee ?')) {
    //getting a confirmation from user
    let firstName = prompt('Please enter first name: '); // variable for Employee first name
    let lastName = prompt('Please enter last name: '); // variable for Employee last name

    let salary = parseFloat(
      prompt('Please enter employee salary(only number): ')
    );
    if (isNaN(salary)) {
      //isNaN checking for data type is number or not ,and if it`s a number return true if is not returns false
      salary = 0;
      console.warn();
      ('Invalid input , salary set default $0.'); //Setting salary as 0 default, showoing warn on consolo
    }
    const employee = { firstName, lastName, salary }; // employee variable , each employee has 3 propertys
    employees.push(employee); // Taking employee and pushing array of employees that we crate in the begining
  }
  return employees;
};

// Display the average salary
const displayAverageSalary = function (employees) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;

  for (const employee of employees) {
    totalSalary += employee.salary;
  }

  const averageSalary = totalSalary / employees.length;
  console.log(`Number of employess is : ${employees.length}`);
  console.log(`Average salary of employees is : $${averageSalary.toFixed(1)}`);
};

// Select a random employee
const getRandomEmployee = function (employees) {
  // TODO: Select and display a random employee
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
