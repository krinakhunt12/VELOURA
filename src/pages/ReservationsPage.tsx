import React from 'react';
import { Reservation } from '../components/sections/Reservation';
import { FAQSection } from '../components/sections/FAQSection';
import { FloatingBooking } from '../components/sections/FloatingBooking';
import { MainLayout } from '../layouts/MainLayout';

const ReservationsPage = () => {
  return (
    <MainLayout>
      <div className="pt-20">
        <Reservation />
        <FAQSection />
        <FloatingBooking />
      </div>
    </MainLayout>
  );
};

export default ReservationsPage;
