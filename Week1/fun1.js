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




