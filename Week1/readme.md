//js-dynamically typed whereas c,java,c++-statically typed
//undeclared variable contains garbage value in c and java,in js it is undefined
//js and java has garbage collection but c does not have garbage collection
//Data
let a;//no specific datatype only decalaration of variable
a=[1,2,3]//object same as array
console.log(typeof a)
a={}
console.log(typeof a)
a=10; 
console.log(typeof a)
a="hi"
console.log(typeof a)
a=true//final value of a is true
console.log(typeof a)
a=123//number
console.log(typeof a)
let b="123";//string
console.log(typeof b)
let c=30;
console.log("a is",a,"b is",b,"c is",c)
console.log(`a is ${a} b is ${b} c is ${c}`)//backtick operator
console.log(a==b)//gives true because it only compares values not datatypes
console.log(a===b) //gives false because it compares both values and datatypes
//condition?exp-1:exp-2->ternary operator
let username='John Doe'//string
console.log(`username is ${username}`)
let status=true//boolean
let m=[90,85,"hi",[1,2,3],false]//array-can accept heterogenenous data
let marks=[90,85,74]//array-group of elements
//object-group of properties
let person={pid:100,//property-1
    name:"John Doe"//property-2
};
//no of iterations known->for loop else while loop
//real time use case of do while->ds programs,menu card,games
let m1=[10,20,30]
for(let i=0;i<m1.length;i++){
    console.log(m1[i])
}
//let allows us to change the value of variable but const does not allow us to change the value of variable
const y=12;
y=13//error because we cannot change the value of constant variable
//functions are first class objects in js because function can be stored in another variable,return another function,receive another function as argument
//function declaration->excecuted when called
//function->outside class called normally,method->inside class called by object
function findSum(a,b){
    let sum=a+b;
    return sum;
}
//function call
let result=findSum(10,20)
console.log("sum is",result)


//function expression
let test =function(a,b){//a function can be stored in a variable in js and to access the function it should be called,we can also remove function name(findSum)
    let sum=a+b
    return sum
}
let result1=test(10,20)
    console.log(result1)


    //another way of function expression->reduces readability
    let result2=findSum(10,20)
    console.log(result2)
    function findSum(a,b){
    let sum=a+b;
    return sum;
}


//gives error because test is not defined when we are calling the function
/*let result=test(10,20)
    console.log(result3)
let test =function(a,b){
    let sum=a+b
    return sum
}*/


//***function expression is better than function declaration because it reduces the chances of error and also it is more readable and maintainable


//arrow function->simplify function expression,return keyword is inserted automatically
let test1=(a,b)=> a+b;
let result4=test1(10,20)
console.log(result4)

//function can->store in a variable,can return another function,can receive another function as an argument.
function test2(){
    return 100
}
let rs=test2()//also written as console.log(test2())
console.log(rs)

//function that returns another function
let test3=function(){
    return function(){
    return 100
    }
}
let rs1=test3()
    console.log(rs1())//also written as console.log(test3())


    //example
   /* let createGame=function (level,nameOfPlayer){
    console.log(`welcome to game ${nameOfPlayer} your level is ${level}`)
    }
createGame(1,'John Doe')
createGame(2,'John Doe')*/

//function with reusable features
let createGame=function (nameOfPlayer){
    return function(level){
console.log(`welcome to game ${nameOfPlayer} your level is ${level}`)
    }
}
let createLevel=createGame('John Doe')
createLevel(1)
createLevel(2)
createLevel(3)
let createLevel2=createGame('Jane Doe')
createLevel2(1)
createLevel2(2)
createLevel2(3)


/*let createGame1=function(level,nameOfPlayer){
    console.log(`welcome to game ${nameOfPlayer} your level is ${level}`)
}->reduces reusability since we have to create game everytime but in above program we can just create levels again and we can also create multiple games*/


//function receiving another function as an argument
let t1=function(a){
    console.log((a))
}
t1(function(){
    console.log("hello")
})


//callback function->a function that is passed as an argument to another function 
let makePayment=function(amount,paymentType){
    console.log(`payment of ${amount} is done`)
    paymentType()
}
let UPIPayment=function(){
    console.log("payment done through UPI")
}
let cardPayment=function(){
    console.log("payment done through card")
}
makePayment(1000,UPIPayment)

//***example->closure feature,x scope is global and when sum(10) is called it returns function(y) and x is normally deleted but since it is referred in inside function x is stored temporaily in heap after removing it from stack snce heap only conatins arrays,objects(dynamic)
let sum=function(x){
    return function(y){
        return x+y
    }
}
let x=sum(10)
console.log(x(20))
//***every js function has closure by default.because of this closure property the variables of outside scope will be maintained temporarily in heap even the outside function exectuion is completed