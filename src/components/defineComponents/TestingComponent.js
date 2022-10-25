import React from 'react'
import DefineComponent from './DefineComponent'
import { DefineComponentArrow } from './DefineComponent'

function TestingComponent() {
  return (
    <div className='container'>
      <h2>Components</h2>
      <p>This example shows how to create, export and import Function and Arrow Function Components</p>
      <DefineComponent />
      <DefineComponentArrow />
    </div>
  )

}

export default TestingComponent

/* 
Notes:
+ To import a specific function you must use {functionName}
+ To import a default function use functionName
*/
