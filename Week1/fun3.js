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
