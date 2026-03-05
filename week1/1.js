/*big number of 2 numbers
2.big number in 3 numbers
3.sum of marks in [9,78,65,98]
4.smallest elememt in marks array*/

//1
let n1=89;
let n2=78;
if(n1>n2){
    console.log(`${n1} is greater than ${n2}`)
}
else {
    console.log(`${n2} is greater than ${n1}`)
}


 //4.smallest elememt in marks array
//4
 let marks1=[90,78,65,98]
 let min=marks1[0]
 for(let i=0;i<marks1.length;i++){
if(marks1[i]<min){
    min=marks1[i]
    console.log("min value is",min)
}
 }


 

