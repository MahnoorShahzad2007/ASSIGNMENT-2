// pages/index.tsx
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default HomePage;
