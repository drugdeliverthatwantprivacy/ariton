import React, { memo } from 'react';
import { Box, Paper, Typography, Avatar, Grid, TextField, Button, Divider } from '@mui/material';
import { Save as SaveIcon, Edit as EditIcon } from '@mui/icons-material';

const ProfileSection = memo<{
  title: string;
  children: React.ReactNode;
}>(({ title, children }) => (
  <Paper sx={{ p: 3, mb: 3 }}>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Divider sx={{ mb: 3 }} />
    {children}
  </Paper>
));

ProfileSection.displayName = 'ProfileSection';

const Profile = memo(() => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Perfil de Usuario
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <ProfileSection title="Información Personal">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar
                sx={{ width: 120, height: 120, mb: 2 }}
                src="/images/avatar.jpg"
              />
              <Button
                variant="outlined"
                startIcon={<EditIcon />}
                sx={{ mb: 2 }}
              >
                Cambiar Foto
              </Button>
            </Box>
          </ProfileSection>
        </Grid>

        <Grid item xs={12} md={8}>
          <ProfileSection title="Detalles de la Cuenta">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Nombre"
                  defaultValue="Juan"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Apellido"
                  defaultValue="Pérez"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  defaultValue="juan.perez@ejemplo.com"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  startIcon={<SaveIcon />}
                  sx={{ mt: 2 }}
                >
                  Guardar Cambios
                </Button>
              </Grid>
            </Grid>
          </ProfileSection>
        </Grid>
      </Grid>
    </Box>
  );
});

Profile.displayName = 'Profile';

export default Profile; 