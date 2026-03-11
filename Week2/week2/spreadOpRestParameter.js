/* Exercise 1: Copy & Extend an Array

                        Goal: Learn array copying with spread
                       
                        You are given:
                                let fruits = ["apple", "banana"];
                       
                       
                        Tasks
                              -> Create a new array moreFruits
                             
                              -> Copy all fruits from fruits
                             
                              -> Add "orange" at the end using spread
                             
                              -> Print both arrays
                       
                       
                        ✅ Expected Output
                              ["apple", "banana"]
                              ["apple", "banana", "orange"]
                       
                        👉 Original array should NOT change.

💡 Exercise 2: Update User Object
                       
                        Goal: Learn object cloning & adding new property
                       
                        You are given:
                               
                                let user = {
                                  name: "Ravi",
                                  city: "Hyderabad"
                                };
                       
                       
                       
                        Tasks
                       
                              -> Create a new object updatedUser
                             
                              -> Copy all properties from user
                             
                              -> Add a new property age: 25
                             
                              -> Print both objects
                       
                       
                       
                        ✅ Expected Output
                              { name: "Ravi", city: "Hyderabad" }
                              { name: "Ravi", city: "Hyderabad", age: 25 }
                       
                        👉 Original object should remain unchanged.*/


//1
let fruits=['apple','banana']
let moreFruits=[...fruits,'orange']
console.log(fruits)
console.log(moreFruits)

//2

let user = {
             name: "Ravi",
            city: "Hyderabad"
        }; 
        let updateUser={...user,age:25}
        console.log(user)
        console.log(updateUser)

   /*Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t*/
     
const user1= {
    id: 101,
    name: "Ravi",
    preferences: {
    theme: "dark",
    language: "en"
     }
    };
    let copyUser={...user1}
    copyUser.name="Priya"
    copyUser.preferences.theme="light"
    console.log(user1)
    console.log(copyUser)

    /*Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

🎯 Task:
      1. Create a deep copy of order
      2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged*/
 const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
                let copyOrder=structuredClone(order)
                copyOrder.customer.address.city="Delhi"
                copyOrder.items[0].price=40000
                console.log(order)
                console.log(copyOrder)

  



