//function to receive 3 number args and returns big number
let test=function(a,b,c){
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
    else{
        return c;
    }

}
let result=test(10,20,30)
console.log("big number is",result)

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

//function that receives an array & search element as args and returns the index of that search element in array.It should return "not found" when element is not found
let test2=function(arr,search){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===search){
            return i;
        }
    }
    return "not found";
}
let result2=test2([90,78,65,98],65)
console.log("index is",result2)