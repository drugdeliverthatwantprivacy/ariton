import React, { memo } from 'react';
import { Box, Paper, Typography, Switch, FormControlLabel, Grid, Divider } from '@mui/material';
import { Notifications, Security, Palette, Language } from '@mui/icons-material';

const SettingItem = memo<{
  icon: React.ReactElement;
  title: string;
  description: string;
  control: React.ReactNode;
}>(({ icon, title, description, control }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
    <Box sx={{ mr: 2 }}>{icon}</Box>
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Box>
    {control}
  </Box>
));

SettingItem.displayName = 'SettingItem';

const Settings = memo(() => {
  const settingSections = [
    {
      title: 'Notificaciones',
      items: [
        {
          icon: <Notifications color="primary" />,
          title: 'Notificaciones Push',
          description: 'Recibe alertas importantes en tiempo real',
          control: <Switch defaultChecked />,
        },
        {
          icon: <Notifications color="primary" />,
          title: 'Notificaciones por Email',
          description: 'Recibe actualizaciones por correo electrónico',
          control: <Switch />,
        },
      ],
    },
    {
      title: 'Apariencia',
      items: [
        {
          icon: <Palette color="primary" />,
          title: 'Modo Oscuro',
          description: 'Cambia entre tema claro y oscuro',
          control: <Switch />,
        },
        {
          icon: <Language color="primary" />,
          title: 'Idioma',
          description: 'Selecciona tu idioma preferido',
          control: <Switch defaultChecked />,
        },
      ],
    },
    {
      title: 'Seguridad',
      items: [
        {
          icon: <Security color="primary" />,
          title: 'Autenticación de dos factores',
          description: 'Aumenta la seguridad de tu cuenta',
          control: <Switch />,
        },
      ],
    },
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Configuración
      </Typography>

      <Grid container spacing={3}>
        {settingSections.map((section) => (
          <Grid item xs={12} key={section.title}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                {section.title}
              </Typography>
              <Divider sx={{ mb: 3 }} />
              {section.items.map((item) => (
                <SettingItem key={item.title} {...item} />
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});

Settings.displayName = 'Settings';

export default Settings; 