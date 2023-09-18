import React from "react";
import Link from 'next/link';
import { useTheme } from '../contexts/ThemeContext';
import { MdDarkMode, MdLightMode } from "react-icons/md";

interface Category {
    name: string;
    slug: string;
  };
  
  interface NavCategoryProps {
    categories: Category[];
  };

const Nav: React.FC<NavCategoryProps> = ({ categories }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <ul className="flex flex-row">
    {categories.map((category) => (
        <li key={category.slug} className="px-4">
          <Link href={`/category/${category.slug}`}>
            {category.name}
          </Link>
        </li>
      ))}
      <li className={`bg-${theme}-background text-${theme}-text`}>
        <button onClick={toggleTheme}>
          {theme === 'light' ? (
            <MdDarkMode />
          ) : (
            <MdLightMode />
          )}
        </button>
      </li>
    </ul>
  );
};

export default Nav;
