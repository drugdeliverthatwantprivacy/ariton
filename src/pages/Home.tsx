import React, { memo } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const FeatureCard = memo<{
  title: string;
  description: string;
  image: string;
}>(({ title, description, image }) => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardMedia
      component="img"
      height="140"
      image={image}
      alt={title}
      sx={{ objectFit: 'cover' }}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
));

FeatureCard.displayName = 'FeatureCard';

const Home = memo(() => {
  const features = [
    {
      title: 'Análisis en Tiempo Real',
      description: 'Monitorea tus datos y métricas en tiempo real con gráficos interactivos.',
      image: '/images/analytics.jpg',
    },
    {
      title: 'Gestión Simplificada',
      description: 'Administra todos tus recursos desde un único panel de control intuitivo.',
      image: '/images/management.jpg',
    },
    {
      title: 'Reportes Personalizados',
      description: 'Genera informes detallados adaptados a tus necesidades específicas.',
      image: '/images/reports.jpg',
    },
  ];

  return (
    <Box>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Bienvenido a Tu Dashboard
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Gestiona y analiza tu negocio de manera eficiente
        </Typography>
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForward />}
          sx={{ mt: 2 }}
        >
          Comenzar
        </Button>
      </Box>

      <Grid container spacing={4}>
        {features.map((feature) => (
          <Grid item xs={12} md={4} key={feature.title}>
            <FeatureCard {...feature} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});

Home.displayName = 'Home';

export default Home; 