import React from 'react';
import { Container } from '@mui/material'
import ResponsiveAppBar from './Navbar';

function Layout({ children }) {
  return (<>
   <ResponsiveAppBar/>
      <Container maxWidth="lg">
        {children}
      </Container>
      </>

  );
}

export default Layout;
