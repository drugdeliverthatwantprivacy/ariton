import { lazy, Suspense } from 'react';
import { CircularProgress } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));

export const Router: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
}; 