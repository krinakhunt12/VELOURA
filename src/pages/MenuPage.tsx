import React from 'react';
import { MenuSection } from '../components/sections/MenuSection';
import { TastingMenuSection } from '../components/sections/TastingMenuSection';
import { FeaturedDish } from '../components/sections/FeaturedDish';
import { MainLayout } from '../layouts/MainLayout';

const MenuPage = () => {
  return (
    <MainLayout>
      <div className="pt-20">
        <MenuSection />
        <TastingMenuSection />
        <FeaturedDish />
      </div>
    </MainLayout>
  );
};

export default MenuPage;
