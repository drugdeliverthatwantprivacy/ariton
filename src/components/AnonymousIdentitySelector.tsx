import React from 'react';
import { Button, Typography, Box } from '@mui/material';

interface Props {
  onSelect: (identity: AnonymousIdentity) => void;
}

export const AnonymousIdentitySelector: React.FC<Props> = ({ onSelect }) => {
  return (
    <Box sx={{ textAlign: 'center', p: 2 }}>
      <Typography variant="h6">
        Selector de Identidad (En desarrollo)
      </Typography>
      <Button
        variant="contained"
        onClick={() => onSelect({
          username: "usuario123",
          displayName: "Usuario Anónimo",
          avatarEmoji: "🦊",
          colorScheme: {
            primary: "#1976d2",
            secondary: "#dc004e"
          }
        })}
      >
        Generar Identidad
      </Button>
    </Box>
  );
}; 