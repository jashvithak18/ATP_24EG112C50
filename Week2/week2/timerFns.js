/* 1.Exam portal simulator:
-----------------------------
When a student submits an exam:

        Immediately show: “Exam submitted successfully”
        After 2 seconds → show: “Evaluating answers…”
        After 4 seconds → show: “Result: Pass”



2.OTP Countdown Simulator (Console App)
------------------------------------
       
        Simulate OTP sending flow in Node.js:
       
        Show “OTP Sent Successfully”
       
        Start 10-second countdown
       
        Allow resend only after countdown ends*/


//1
console.log("Exam submitted successfully")
setTimeout(()=>{
console.log('Evaluating answers')
},2000
)
setTimeout(()=>{
console.log('Result:pass')
},4000
)

//2
console.log('otp sent successfully')
let seconds=10;
let intervalId=setInterval(()=>{
seconds--;
console.log(`Otp can be sent after ${seconds}secs`)
if(seconds===0){
console.log('Resend')
clearInterval(intervalId)
}
},1000)

