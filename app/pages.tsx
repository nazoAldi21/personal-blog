"use client"
import React, { useEffect, useState } from 'react';
import { getPosts } from '@services';
import SectionPost from '@layout/SectionPost';

const Home: React.FC = ({children}) => {
  return (
    <main className='w-full flex flex-col items-center'>
      <SectionPost />
    </main>
  );
};

export default Home;
