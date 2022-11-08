import React from 'react'
import HeaderSection from '../shared/HeaderSection'
import DataTableUsers from './DataTable/DataTableUsers'
import ChildrenParam from '../03_UsingParams/ChildrenParam'


function TestingAxiosAPI() {
  return (
    <div>
      <div className='container'>
            <HeaderSection 
                name = 'API Calls using AXIOS'
                smallDescription= {
                  `This example shows how to call the HTTP verb GET, 
                   also include MUI styles`
                } 
            />

            <ChildrenParam children={<DataTableUsers />}/>
        </div>
        
    </div>
  )
}

export default TestingAxiosAPI

