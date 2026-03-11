/*     ii. task.js - Task operations
                    // TODO: Import validator functions
                    // import { ... } from './validator.js';
                    
                    const tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      // If valid, add to tasks array
                      // Return success/error message
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      // Find task and mark as complete
                    }

                  // Export functions*/

                  import { validateTitle, validatePriority, validateDueDate } from './validator.js';
                  let tasks=[]
                    function addTask(title, priority, dueDate) {
                        if(!validateTitle(title) || !validatePriority(priority) || !validateDueDate(dueDate)) {
                          return "Invalid task"
                        }
                        tasks.push({title,priority,dueDate})
                        return true
                    }
                    function getAllTasks(){
                      return tasks
                    }
                    export{addTask,getAllTasks}