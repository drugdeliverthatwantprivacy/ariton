import React, { useState, useEffect } from 'react';
import { IdentityService } from '../services/identityService';
import { Button, Avatar, Typography, Box } from '@mui/material';

interface Props {
  onSelect: (identity: AnonymousIdentity) => void;
}

export const AnonymousIdentitySelector: React.FC<Props> = ({ onSelect }) => {
  const [currentIdentity, setCurrentIdentity] = useState<AnonymousIdentity | null>(null);
  const [loading, setLoading] = useState(true);

  const generateNewIdentity = async () => {
    setLoading(true);
    try {
      const identity = await IdentityService.getInstance().generateRandomIdentity();
      setCurrentIdentity(identity);
      setLoading(false);
    } catch (error) {
      console.error('Error generating identity:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    generateNewIdentity();
  }, []);

  if (loading || !currentIdentity) {
    return <div>Generando identidad anónima segura...</div>;
  }

  return (
    <Box sx={{ textAlign: 'center', p: 2 }}>
      <Avatar
        sx={{
          width: 80,
          height: 80,
          fontSize: '2rem',
          bgcolor: currentIdentity.colorScheme.primary,
          margin: '0 auto',
        }}
      >
        {currentIdentity.avatarEmoji}
      </Avatar>

      <Typography variant="h6" sx={{ mt: 2 }}>
        {currentIdentity.displayName}
      </Typography>

      <Typography variant="body2" color="textSecondary">
        @{currentIdentity.username}
      </Typography>

      <Box sx={{ mt: 2, display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button
          variant="outlined"
          onClick={generateNewIdentity}
        >
          Generar Otro
        </Button>

        <Button
          variant="contained"
          onClick={() => onSelect(currentIdentity)}
          sx={{ bgcolor: currentIdentity.colorScheme.primary }}
        >
          Usar Esta Identidad
        </Button>
      </Box>
    </Box>
  );
}; 