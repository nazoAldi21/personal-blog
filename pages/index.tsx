import React, { useEffect, useState } from 'react';
import SectionPost from './posts';
import { useTheme } from '@contexts/ThemeContext';
import SectionBanner from '@components/SectionBanner';

const Home: React.FC = () => {
    const { theme } = useTheme();
  return (
    <main className={`w-full flex flex-col items-center bg-${theme}-background text-${theme}-text`}>
      <SectionBanner />
      <SectionPost />
    </main>
  );
};

export default Home;
