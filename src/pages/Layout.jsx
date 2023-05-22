import React from 'react';
import { Container } from '@mui/material'
import ResponsiveAppBar from './Navbar';


function Layout({ children }) {
  return (
    <div>
     <ResponsiveAppBar/>
      <Container maxWidth="lg">
        {children}
      </Container>
    </div>
  );
}

export default Layout;
