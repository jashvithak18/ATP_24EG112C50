//2.function that receives an array as arg and return their sum
let test1=function(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
let result1=test1([90,78,65,98])
console.log("sum is",result1)
