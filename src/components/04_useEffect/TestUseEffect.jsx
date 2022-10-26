
import React, {useState, useEffect} from 'react'

import HeaderSection from '../shared/HeaderSection'

function TestUseEffect() {

  const [count, setCount] = useState(0)

  useEffect(()=> {
    console.log (`Im starting new Life Cycleor with the value  ${count}`);
    return () => {
      console.log (`My live cycle is finished ${count}`);
    }
  }, [count]);

  const handleClick = () => {
    setCount(current => current + 1)
  }


  return (
    <div className='container'>
      <HeaderSection 
        name='Hooks useEffect and useState'
        smallDescription = 'Implementation about useState and useEffect hooks'
      />
      
  
      Counter {count}
      <button onClick={handleClick}> Click</button>

    </div>
  )
}

export default TestUseEffect