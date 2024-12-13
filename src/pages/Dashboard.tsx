import React, { memo } from 'react';
import { Grid, Paper, Typography, Box, Card, CardContent, LinearProgress } from '@mui/material';
import { Trending as TrendingIcon, People as PeopleIcon, AttachMoney as MoneyIcon, ShowChart as ChartIcon } from '@mui/icons-material';

const StatCard = memo<{
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}>(({ title, value, icon, color }) => (
  <Card>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box sx={{ 
          bgcolor: color,
          borderRadius: '50%',
          p: 1,
          mr: 2,
          display: 'flex' 
        }}>
          {icon}
        </Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Typography variant="h4">{value}</Typography>
      <Box sx={{ mt: 2 }}>
        <LinearProgress variant="determinate" value={75} />
      </Box>
    </CardContent>
  </Card>
));

StatCard.displayName = 'StatCard';

const Dashboard = memo(() => {
  const stats = [
    { title: 'Usuarios', value: '1,234', icon: <PeopleIcon sx={{ color: 'white' }} />, color: '#2196F3' },
    { title: 'Ingresos', value: '$45,678', icon: <MoneyIcon sx={{ color: 'white' }} />, color: '#4CAF50' },
    { title: 'Ventas', value: '823', icon: <ChartIcon sx={{ color: 'white' }} />, color: '#FF9800' },
    { title: 'Crecimiento', value: '+27%', icon: <TrendingIcon sx={{ color: 'white' }} />, color: '#F44336' },
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <StatCard {...stat} />
          </Grid>
        ))}

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, height: '400px' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Gráfico de Ventas
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: '400px' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Actividad Reciente
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
});

Dashboard.displayName = 'Dashboard';

export default Dashboard; 