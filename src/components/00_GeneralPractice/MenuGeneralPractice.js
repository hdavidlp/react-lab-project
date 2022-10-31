import React, { useEffect, useState } from 'react'
import HeaderSection from '../shared/HeaderSection'

import axios from "axios"
import { Button, TextField } from '@mui/material'


function MenuGeneralPractice() {


  const [quote, setQuote] = useState("")

  //https://jsonplaceholder.typicode.com/users
  const getQuote = () =>{
    axios.get('https://api.quotable.io/random')
    .then(res => {
      setQuote(res.data.content)
      console.log(res.data.content)
    }).catch(err => {
      console.log(err)
    })
  }
  
  return (
  <div className='container'>
      <ul>
        <li>Llamadas APIS</li>
        <li>Uso de Fetch y AXIOS ambos son para traer datos desde un API</li>
        <li>librerias de stilos: Mareial UI MUI y Styled-Components</li>
      </ul>
   
      
      <div className='container'>
        <Button variant="outlined" onClick={getQuote}>Get Quote</Button>
        {/* {quote && <p>{quote}</p> } */}
        <TextField id="standard-basic" label={quote && quote } variant="standard" fullWidth />
      </div>
    </div>
  )
}

export default MenuGeneralPractice