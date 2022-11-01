import React, {useState} from 'react'
import axios from "axios"
import { Button } from '@mui/material'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function DataTableUsers() {

  const [quote, setQuote] = useState([])

  //https://jsonplaceholder.typicode.com/users
  const getQuote = () =>{
    //axios.get('https://api.quotable.io/random')
    axios.get('https://localhost:7270/api/account/all')
    .then(res => {
      setQuote(res.data)
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div className='container'>
      <ul>
        <li>Llamadas APIS</li>
        <li>Uso de Fetch y AXIOS ambos son para traer datos desde un API</li>
        <li>librerias de stilos: Material UI MUI y Styled-Components</li>
      </ul>
   
      
      <div className='container'>
        <Button variant="outlined" onClick={getQuote}>Get Data</Button>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="left">Nombre</TableCell>
                <TableCell align="left">e-mail</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {quote.map((element) => (
                <TableRow
                  key={element.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <button key={element.id} name={element.name}>
                      {element.id}
                    </button>
                  </TableCell>
                  <TableCell align="left">{element.name}</TableCell>
                  <TableCell align="left">{element.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default DataTableUsers