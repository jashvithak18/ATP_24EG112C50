import { useState } from "react";
function Counter(){
    const [count,setCount]=useState(0);
    const increment =()=>{
        setCount(count+1);
    }

    const decrement =()=>{
        setCount(count-1);
    }

    return(
        <div className="text-center p-10 border">
            <h1 className="text-4xl">Count : {count}</h1>
            <button className="p-4 bg-amber-300 " onPointerMoveCapture ={increment}>+</button>
            <button className="p-4 bg-red-300 " onClick={decrement}>-</button>
        </div>
    )
}
export default Counter;