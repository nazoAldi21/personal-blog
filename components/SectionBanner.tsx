"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useCycle } from 'framer-motion';
import { bannerTitleTop, bannerTitleMid, bannerTitleEnd } from "@/utils/constants";
import { useTheme } from "@contexts/ThemeContext";

const SectionBanner = () => {
    const {theme} = useTheme();
  return (
    <section className="w-full h-96 px-10 flex align-center items-center relative z-0">
      <div className="w-24 h-28 left-32 top-32 absolute bg-violet-500 rounded-full blur-3xl" />
      <div className="w-32 h-40 left-2/4 top-96 absolute bg-violet-500 rounded-full blur-3xl" />
      <div className="w-24 h-28 left-3/4 top-32 absolute bg-violet-600 blur-3xl" />
      <div className="flex flex-row text-center w-full">
        <div className="flex flex-col w-full">
          <motion.span 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className={`xs:text-2xl lg:text-5xl font-normal py-8 pb-2 raleway text-${theme}-text`}
          >
            {bannerTitleTop}
          </motion.span>
          <motion.h4 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
          className="xs:text-3xl lg:text-6xl font-bold py-4 pt-0 raleway text-violet-500">
           {bannerTitleMid}
          </motion.h4>
          <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1.5 }}
          className="text-sm font-raleway">
            {bannerTitleEnd}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default SectionBanner;
