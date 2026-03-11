/*You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"*/
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

    //1
    let inStockp=cart.filter(product=>product.inStock='true')
    console.log(inStockp)

    //2
    let total_price=cart.map(price=>price.quantity*price.price)
    console.log(total_price)

    //3
    let grand_total=cart.reduce((acc,price)=>acc+(price.quantity*price.price),0)
    console.log(grand_total)

    //4
    let details=cart.find((product)=>product.name==='Mouse')
    console.log(details)

    //5
    let position=cart.findIndex((product)=>product.name==='Keyboard')
    console.log(position)


/*You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"*/


   const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//1
let pass=students.filter(student=>student.marks>=40)
    console.log("Students passed=",pass)

//2
let grade=students.map(student=>{
    if(student.marks>=90){
        student.grade='A'
    }
    else if(student.marks>=75){
        student.grade='B'
    }
    else if(student.marks>=60){
        student.grade='C'
    }
    else{
        student.grade='D'
    }
    return student
})
console.log(grade)
console.log(students)

//3
let avg=students.reduce((acc,student)=>acc+student.marks,0)/students.length
console.log(avg)

//4
let r=students.find((student)=>student.marks===92)
    console.log(r)

//5
let r1=students.findIndex((student)=>student.name==='Kiran')
    console.log(r1)

   /* Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"*/

    const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
    ]

    //1
    const it=employees.filter(emp=>emp.department==="IT")
    console.log(it)

    //2
    const netSalary=employees.map(emp=>emp.salary+(10/100)*emp.salary)
    console.log(netSalary)
    console.log(employees)

    //3
    const total_salary=employees.reduce((acc,emp)=>acc+emp.salary,0)
    console.log(total_salary)

    //4
let r2=employees.find((emp)=>emp.salary===30000)
    console.log(r2)

    //5
    let r3=employees.findIndex((emp)=>emp.name==='Neha')
    console.log(r3)

    /*Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"*/
    
    const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
//1
let sci_fi=movies.filter(m=>m.genre==="Sci-Fi")
console.log(sci_fi)

//2
let rating=movies.map(m=>m.title+ " "+m.rating)
console.log(rating)

//3
let avg_rating=movies.reduce((acc,m)=>acc+m.rating,0)/movies.length
console.log(avg_rating)

//4
let r4=movies.find(m=>m.title==='Joker')
console.log(r4)

//5
let r5=movies.findIndex(m=>m.title==='Avengers')
console.log(r5)

/*Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000*/

    const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
//1
let credit=transactions.filter(t=>t.type==='credit')
console.log(credit)
//2
let amount=transactions.map(t=>t.amount)
console.log(amount)
//3
let balance=transactions.reduce((acc,t)=>{
    if(t.type==='credit'){
        return acc+t.amount
    }
    else{
        return acc-t.amount
    }
},0)
console.log(balance)
//4
let first_debit=transactions.find(t=>t.type==='debit')
console.log(first_debit)
//5
let t_amt=transactions.findIndex(t=>t.amount===10000)
console.log(t_amt)





