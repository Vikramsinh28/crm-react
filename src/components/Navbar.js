import React from 'react'
import {Box , AppBar , Toolbar ,Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              C R M
          </Typography>
          <Button style={{marginRight : 10}} component="button" variant="contained" aria-label="outlined button group">
             <Link style={{textDecoration: 'none' , color:"#ffff" }} to="/" >SignUp</Link>
          </Button>
          <Button style={{marginRight : 10}} component="button" variant="contained" aria-label="outlined button group">
             <Link style={{textDecoration: 'none' , color:"#ffff"}}  to="/home" >Home</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar