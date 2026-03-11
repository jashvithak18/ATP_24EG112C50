/*
Task Management System (ToDo App Modules):
     Building a task manager like Todoist

Requirements:
     Create a modular todo app with 3 separate files:

       
          
        i. validator.js - Input validation
                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        // Your code here
                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                        // Your code here
                      }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        // Your code here
                      }*/
                  

 // 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
    if(title){
        return "Title required"
    }  
    if(title.length<3){
        return "Minimun 3 characters required"   
    }
    return "Valid title"               
}
                      
// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
    const validPriorities = ['low', 'medium', 'high'];
    if (!validPriorities.includes(priority)) {
        return "Invalid priority. Must be: low, medium, high";
    }
    return "Valid priority";
}
                      
// 3. Validate due date (must be future date)
function validateDueDate(date) {
    /*const currentDate = new Date();
    const dueDate = new Date(date);
    if (dueDate <= currentDate) {
        return "Due date must be a future date";
    }*/
    return "Valid dueDate";
}
export{validateTitle,validatePriority,validateDueDate}



