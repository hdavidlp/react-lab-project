import React from 'react'
import {Form} from './Form'
import {Header} from './Header'

import './Form.css'


function TextForm() {
  return (
    <div className="App">
      <Header title="Fill the form to subscribe"/>
      <Form />
    </div>
  )
}

export default TextForm