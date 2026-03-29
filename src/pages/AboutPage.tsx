import React from 'react';
import { About } from '../components/sections/About';
import { TeamSection } from '../components/sections/TeamSection';
import { Section } from '../components/ui/Section';
import { MainLayout } from '../layouts/MainLayout';

const AboutPage = () => {
  return (
    <MainLayout>
      <div className="pt-20">
        <About />
        <TeamSection />
        <Section className="py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Our Mission</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8">Excellence in Every Detail</h3>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              We strive to create a sanctuary where gastronomy meets emotion. Our commitment to sustainability and local sourcing ensures that every bite tells a story of the land and the hands that nurtured it.
            </p>
          </div>
        </Section>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
