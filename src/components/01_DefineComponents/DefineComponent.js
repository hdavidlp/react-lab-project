
import React, { Component } from 'react'

function DefineComponent() {
  return (
    <div >
        This is a new Component using Function
    </div>
  )
}

const  DefineComponentArrow=()=> {
    return (
      <div >
          This is a new Component using Arrow Function
      </div>
    )
  }

export default DefineComponent
export {DefineComponentArrow}


/* 
Notes:
+ Arrow function must use const
+ Only return 1 Component, you must group it 
+ Only one function can be exported by default
*/

