import React from 'react'


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import  {Link as routerlink } from 'react-router-dom';
import { flex } from '@mui/system';
 
function Navbar() {
  return (
    <div>
     
 
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Box sx={{ display:'flex',gap:3}}>
 <Link color="inherit" component={routerlink} underline='none' to={'/'}>Home</Link>
          <Link color="inherit" component={routerlink} underline='none'to={'/login'}>Login</Link>
         <Link color="inherit" component={routerlink} underline='none'to={'/register'}>Register</Link>
        <Link color="inherit" component={routerlink} underline='none'to={'/cart'}>Cart</Link>
          </Box>
         

        </Toolbar>
      </AppBar>
    </Box>
  




    </div>
  )
}

export default Navbar
