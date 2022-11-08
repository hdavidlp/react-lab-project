import React from 'react'
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function TableHeader() {
  return (
    <TableHead>
        <TableRow>
        <TableCell>Id</TableCell>
        <TableCell align="left">Nombre</TableCell>
        <TableCell align="left">e-mail</TableCell>
        </TableRow>
    </TableHead>
  )
}

export default TableHeader