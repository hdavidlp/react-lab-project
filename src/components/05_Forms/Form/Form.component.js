import React, { useState, useEffect } from 'react'
import { Card } from '../Shared/components/Card'
import { Button, Input } from '../Shared/components'
import { fieldsList, isFieldValid } from './Form.services'

import "./Form.styles.css"

const initialState = fieldsList.map(field=> ({...field, ready:false, value:""}))

const Form = () => {

  const [fieldsReady, setFieldsReady] = useState(false)
  const [fieldsForm, setFieldsForm] = useState(initialState)

  useEffect(()=> {
    setFieldsReady(
      !fieldsForm.some((field) => field.ready === false)
    )  
    
    console.log (`Status field ready : ${fieldsReady}`)
  }, [fieldsForm]);

  function isValidForm(){
    return fieldsReady
  }

  const  isButtonDisabled = !isValidForm()

  const handleOnChange = (e) => {
    const { name, value } = e.target
    console.log (`campo ${name} valor ${value}`)

    setFieldsForm(newFieldForms => {
      return newFieldForms.map(field => {
        return field.name===name ? {...field, value: value, ready : isFieldValid(value)}:field
      })
    })

    // setFieldsForm((current) => ({
    //   ...current, ...{[name]:value}
    //   }
    // ))
  }

  const handleClickClear = () => {
    console.log('Clear')
    setFieldsForm(initialState)
  }

  const handleClickSubmit = () => {
    window.alert("Send button clicked");
  }
   
  return (
    <Card width={"50%"}>
      <div className="form">
        
        {console.log (fieldsForm)}
        {fieldsForm.map((field) =>(
          <Input
            key={field.name} 
            // name= {field.name}
            // label={field.label} 
            // value ={field.value}
            // type={field.type}
            onChange = {handleOnChange}
            
            {...field} 
            // ..field this command map each equal field with the value of the objet
            // is similar to name = {field.name} label ={field.label} etc
            />
          ))
        }

      </div>
      <div className="form-actions">
        <Button title="Clear" onClick={handleClickClear} className='button-cancel'/>
        <Button title= {`${fieldsReady ? "R":"Not r"}eady to send`} 
        onClick={handleClickSubmit} disabled={isButtonDisabled}/>
      </div>
    </Card>
  )
}

export default Form