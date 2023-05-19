import React from 'react';
import Navbar from './Navbar';
import { Container } from '@mui/material'

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        {children}
      </Container>
    </div>
  );
}

export default Layout;
