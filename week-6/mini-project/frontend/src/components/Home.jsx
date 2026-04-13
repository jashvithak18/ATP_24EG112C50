import React from 'react'
import { counterContextObj } from '../contexts/ContextProvider'
import { useContext } from 'react'
function Home() {
 const {counter,changeCounter}= useContext(counterContextObj)
  return (
   <div>
<h1 className=''>Counter:{counter}</h1>
<button onClick={changeCounter} className='bg-yellow-300'>Change</button>
   </div>

  )
}

export default Home