
import React from 'react'
import DefineComponent from './DefineComponent'
import { DefineComponentArrow } from './DefineComponent'
import HeaderSection from '../shared/HeaderSection'

function TestingComponent() {
  return (
    <div className='container'>
      <HeaderSection 
        name = 'Components'
        smallDescription= 'This example shows how to create, export and import Function and Arrow Function Components'
      />
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
