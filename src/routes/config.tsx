import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutPage from '../pages/AboutPage';
import MenuPage from '../pages/MenuPage';
import GalleryPage from '../pages/GalleryPage';
import ReservationsPage from '../pages/ReservationsPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/reservations" element={<ReservationsPage />} />
    </Routes>
  );
};
