import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material'
import axios from 'axios'
import React, {  useEffect, useState } from 'react'

const View = () => {
  var [user, setUser] = useState([])
  useEffect(()=>{
  axios.get("http://localhost:3004/view")
    .then((response) => {
      console.log(response.data);
      setUser(response.data);
    })
    })

const delValue = (id) => {
  axios.delete("http://localhost:3004/remove/"+id)
    .then((response) => {
      console.log(response.data.message);
    })

}
  return (
    <div>
      <h2>View</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell>AGE</TableCell>
              <TableCell>DEPARTMENT</TableCell>
              <TableCell>SALARY</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((val) => {
              return (
                <TableRow>
                  < TableCell>{val.Name}</TableCell>
                  <TableCell>{val.Age}</TableCell>
                  <TableCell>{val.Dept}</TableCell>
                  <TableCell>{val.Sal}</TableCell>
                  <TableCell>
                    <Button size="small" varient='contained'>update</Button>&nbsp;
                    <Button size="small" varient='contained' onClick={()=>{delValue(val._id)}}>delete</Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}

export default View