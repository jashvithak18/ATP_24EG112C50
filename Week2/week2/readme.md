//synchronous js-tasks are done one after other(independent taks)
/*console.log("first")
for(let i=0;i<9000000000;i++){}
console.log("second")*/

//asynchronous js-tasks are done parallely(used in case of dependent tasks)
console.log("first")
setTimeout(()=>{
console.log("Task completed")
},
5000)
console.log("second")

//js contains only one thread(main thread)
//**** event loop(js runtime environment diagram)

//timer functions
setTimeout(()=>{     //takes 2 arguments,callback fn and timeout
console.log("callback executed")
},3000);//3000 milli seconds
console.log('hi')

setInterval(()=>{
    console.log("timer called")
},2000)



//promise->every promise starts with pending status(can be fulfilled or rejected)
//promise is btwn 2 projects->one creator,one consumer

//promise producer
const promiseObj=new Promise((fulfilled,rejected)=>{
    fulfilled("Promise fulfilled")
    //rejected("Promise rejected")->only one of the 2 can be done
})

//promise consumer
promiseObj
.then(()=>{})
.catch(()=>{})

//call you in 5 secs
console.log("Friend is waiting for a call in 5 secs")
let futureCondition=true;
const promiseObj1=new Promise((fulfilled,rejected)=>{
setTimeout(()=>{
    if(futureCondition===true){
fulfilled("Hello,how are you?")
    }
    else{
        rejected("Call you later")
    }
},5000)
})
console.log(promiseObj1)
promiseObj1
.then((message)=>console.log("Message in then:",message))
.catch((errorMessage)=>console.log("error",errorMessage))


//I will send 10000 tomorrow
let futureCondition1=false;
const promiseObj2=new Promise((fulfilled,rejected)=>{
setTimeout(()=>{
    if(futureCondition1===true){
fulfilled('10000 sent')
    }
    else{
        rejected('No money received')
    }
},1000)
})
console.log(promiseObj2)
promiseObj2
.then((message)=>console.log(message))
.catch((errorMessage)=>console.log(errorMessage))

//examples of promises
//make api request
//hash a password
//creating tokens
//database /HTTP libraries
//file & stream APIs