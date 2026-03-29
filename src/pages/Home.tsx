import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { AwardsSection } from '../components/sections/AwardsSection';
import { FeaturedDish } from '../components/sections/FeaturedDish';
import { PrivateDining } from '../components/sections/PrivateDining';
import { Testimonials } from '../components/sections/Testimonials';
import { Newsletter } from '../components/sections/Newsletter';
import { MainLayout } from '../layouts/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <AwardsSection />
      <FeaturedDish />
      <PrivateDining />
      <Testimonials />
      <Newsletter />
    </MainLayout>
  );
};

export default Home;
