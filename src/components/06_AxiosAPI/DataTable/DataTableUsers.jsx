import React, {useState} from 'react'
import axios from "axios"
import { Button } from '@mui/material'

import Table from '@mui/material/Table';

//import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
import TableHeader from '../UsersTableHeader/TableHeader.component';
//import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableBodyUsers from '../UsersTableBody/TableBody.component';


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
      <Button variant="outlined" onClick={getQuote}>Get Data</Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHeader />
          <TableBodyUsers dsUsers = {quote}/>
        </Table>
      </TableContainer>
    </div>
  )
}

export default DataTableUsers