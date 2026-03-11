/*
Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28*/
const temperature=[32,35,28,40,38,30,42]
//filter temp above 35
const r1=temperature.filter((temp)=>temp>35)
console.log(r1)

//map to convert celcius to fahrenheit
const r2=temperature.map((temp)=>temp+32)
console.log(r2)

//reduce to calculate average temp
const avg=temperature.reduce((acc,temp)=>(acc+temp)/temperature.length)
console.log(avg)

//find first temp above 40
const r3=temperature.find((temp)=>temp>40)
console.log(r3)

//find index of temp 28
const r4=temperature.findIndex((temp)=>temp===28)
console.log(r4)

/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"*/

    const courses = ["javascript", "react", "node", "mongodb", "express"];
    //1
    const names=courses.filter(courses=>courses.length>5)
    console.log(names) 
    //2
    const upCase=courses.map(courses=>courses.toUpperCase())
    console.log(upCase)
    //3
    const strings=courses.reduce((acc,string)=>acc+"|"+string)
    console.log(strings)
    //4
    const findReact=courses.find((ele)=>ele==="react")
    console.log(findReact)
    //5
    const findNode=courses.findIndex((ele)=>ele==="node")
    console.log(findNode)
