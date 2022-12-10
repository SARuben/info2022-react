import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '../Logo/Logo';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './header.css'

export default function AppBarHeader() {
  return (
      <AppBar 
          position = "sticky"
          color = '' 
       
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent:'space-around',
            background:'#272727',
                
          }}>
          <Logo />     
          <Toolbar variant="dense">
          
            <Typography className ='header'
               variant="h6"
               color= '#ff638c'
               fontFamily='cursive,"Roboto", "Helvetica", "Arial"'
              paragraph
               >
              Buscador de Noticias en castellano
            </Typography>
          </Toolbar>
        </Box>
      </AppBar>
    
  );
}