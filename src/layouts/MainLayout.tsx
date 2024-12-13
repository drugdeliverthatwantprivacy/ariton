import React, { useCallback, useMemo } from 'react';
import { Box, Container, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon, Home, Info, Dashboard, Settings, Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { text: 'Inicio', icon: Home, path: '/' },
  { text: 'Dashboard', icon: Dashboard, path: '/dashboard' },
  { text: 'Perfil', icon: Person, path: '/profile' },
  { text: 'Configuración', icon: Settings, path: '/settings' },
  { text: 'Acerca de', icon: Info, path: '/about' },
];

const MainLayout: React.FC<{ children: React.ReactNode }> = React.memo(({ children }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleDrawerToggle = useCallback(() => {
    setDrawerOpen(prev => !prev);
  }, []);

  const handleNavigation = useCallback((path: string) => {
    navigate(path);
    if (isMobile) setDrawerOpen(false);
  }, [isMobile, navigate]);

  const drawer = useMemo(() => (
    <Box sx={{ width: 250 }}>
      <List>
        {menuItems.map(({ text, icon: Icon, path }) => (
          <ListItem 
            button 
            key={text}
            onClick={() => handleNavigation(path)}
          >
            <ListItemIcon><Icon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  ), [handleNavigation]);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <AppBar position="fixed" elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Mi Aplicación
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? drawerOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Mejor rendimiento en móviles
        }}
      >
        {drawer}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
          mt: 8,
          ml: isMobile ? 0 : '250px',
        }}
      >
        <Container maxWidth="lg">
          {children}
        </Container>
      </Box>
    </Box>
  );
});

MainLayout.displayName = 'MainLayout';

export default MainLayout; 