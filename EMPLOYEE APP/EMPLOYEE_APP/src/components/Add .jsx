import { Button, TextField } from '@mui/material'
import React from 'react'

const Add  = () => {
  return (
      <div>
          <h2>Add</h2>
          <TextField label="NAME" variant="outlined" ></TextField><br /><br /><br />
          <TextField label="AGE" variant="outlined" ></TextField><br /><br /><br />
          <TextField label="DEPARTMENT" variant="outlined" ></TextField><br /><br /><br />
      <TextField label="SALARY" variant="outlined" ></TextField><br /><br /><br />
          <Button variant='contained'>ADD</Button>
      </div>
  )
}

export default Add 