import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/config';

export default function RestaurantApp() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
