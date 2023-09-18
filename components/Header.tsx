"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getPosts, getCategories } from "@services";
import Nav from "./Nav";
import { GetStaticProps } from "next";
import { useTheme } from "@contexts/ThemeContext";


const Header:React.FC = () => {
  const [category, setCategory] = useState([]);
  const [navBackground, setNavBackground] = useState(false);
  const {theme} = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldHaveBackground = scrollPosition > 0;
      setNavBackground(shouldHaveBackground);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const getCategoryData = async () => {
      const data = await getCategories();
      setCategory(data);
    };

    getCategoryData();
  }, []);
  return (
    <header className={`w-full h-16 bg-${theme}-background text-${theme}-text flex flex-row`}>
      <nav className={`flex sm:flex-row lg:justify-around items-center justify-center w-full h-16 fixed z-50 ${
        navBackground
          ? `inset-0 bg-${theme} bg-opacity-80 backdrop-filter backdrop-blur-xl`
          : ""
      }`}>
        <div className="container py-8 flex flex-row justify-between items-center">
          <div>
            <Link href="/">Blog Script</Link>
          </div>
          <div>
              <Nav categories={category} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const category = await getCategories();

  return {
    props: {
      category,
    },
  };
};

export default Header;
