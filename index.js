// Write your solution in this file!

function employees(employee, key, value) {

} 
  const employee = {
    name: "John Doe",
    age: 30,
    department: "Sales"
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new object as a clone of the original employee object
    const clonedEmployee = { ...employee };
  
    // Check if the key exists in the clonedEmployee object
    if (clonedEmployee.hasOwnProperty(key)) {
      // Update the existing value
      clonedEmployee[key] = value;
    } else {
      // Add a new key-value pair
      clonedEmployee[key] = value;
    }
  
    // Return the clonedEmployee object
    return clonedEmployee;
  }
  
  const employeeObj = {
    name: "Sam",
    streetAddress: "11 Broadway",
  };
  
  console.log("Before update:", employeeObj);
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employeeObj, "position", "Manager");
  
  console.log("After update:", updatedEmployee);

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the existing value or add a new key-value pair
    employee[key] = value;
  
    // Return the updated employee object
    return employee;
  }

  function deleteFromEmployeeByKey(employee, key) {
    // Check if the key exists in the employee object
    if (!employee.hasOwnProperty(key)) {
      throw new Error(`Key "${key}" not found in employee object`);
    }
  
    // Create a new object as a clone of the original employee object
    const clonedEmployee = { ...employee };
  
    // Delete the key from the clonedEmployee object
    delete clonedEmployee[key];
  
    // Return the clonedEmployee object
    return clonedEmployee;
  }
  
  console.log(employee); // Before deletion
  // Output: { name: 'John Doe', age: 30, position: 'Software Engineer' }
  
  
  console.log(updatedEmployee); // After deletion
  // Output: { name: 'John Doe', position: 'Software Engineer' }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Check if the key exists in the employee object
    if (employee.hasOwnProperty(key)) {
      // Delete the key from the employee object
      delete employee[key];
    } else {
      // Handle the case when the key is not found
      console.log(`Key "${key}" not found in employee object`);
    }
  
    // Return the updated employee object
    return employee;
  }