import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => 
{

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="h2">EMPLOYEE APP</Typography>
                    <Link to='/'>
                        <Button variant="contained" color="secondary">ADD</Button>
                    </Link>
                    &nbsp;
                    <Link to='/V'>
                        <Button variant="contained" color="secondary">VIEW</Button>
                    </Link>
                    &nbsp;
                   
                </Toolbar>
            </AppBar>
    </div> 
    )}
  

export default Navbar