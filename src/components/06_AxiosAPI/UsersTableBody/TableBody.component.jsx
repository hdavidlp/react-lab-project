import React from 'react'
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function TableBodyUsers({dsUsers}) {
  return (
    <TableBody>
        {dsUsers.map((element) => (
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
  )
}

export default TableBodyUsers