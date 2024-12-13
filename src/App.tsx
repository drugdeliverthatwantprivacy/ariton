import React from 'react';
import { Box, Container } from '@mui/material';
import { AnonymousIdentitySelector } from './components/AnonymousIdentitySelector';

function App() {
  const handleIdentitySelect = (identity: AnonymousIdentity) => {
    console.log('Selected identity:', identity);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <AnonymousIdentitySelector onSelect={handleIdentitySelect} />
      </Box>
    </Container>
  );
}

export default App; 