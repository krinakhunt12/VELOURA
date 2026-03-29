import React from 'react';
import { Gallery } from '../components/sections/Gallery';
import { AtmosphereSection } from '../components/sections/AtmosphereSection';
import { MainLayout } from '../layouts/MainLayout';

const GalleryPage = () => {
  return (
    <MainLayout>
      <div className="pt-20">
        <Gallery />
        <AtmosphereSection />
      </div>
    </MainLayout>
  );
};

export default GalleryPage;
