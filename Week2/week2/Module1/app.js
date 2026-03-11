/*iii. app.js - Main application
                  // TODO: Import task functions
                  // import { ... } from './task.js';
                  // Test your module system
                  // 1. Add some tasks
                  // 2. Display all tasks
                  // 3. Complete a task
                  // 4. Display all tasks again*/
      
   import { addTask,getAllTasks } from './task.js'; 
   addTask("Eating", "high", "2024-12-11")
   let a=getAllTasks();
   console.log(a)      