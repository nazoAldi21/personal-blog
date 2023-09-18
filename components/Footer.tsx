import { useTheme } from "@contexts/ThemeContext";
import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className={`flex items-center justify-center relative bottom-0 bg-${theme}-background`}>
      <div className="container flex flex-row justify-between py-6">
        <div>
          <h3 className={`text-sm text-${theme}-text`}>Copyright by Fauzan, All rights reserved.</h3>
        </div>
        <ul className={`flex flex-row text-${theme}-text`}>
          <li className="px-2 hover:text-green-600"><Link href=""><FaWhatsapp/></Link></li>
          <li className="px-2 hover:text-fuchsia-500"><Link href=""><FaInstagram/></Link></li>
          <li className="px-2 hover:text-red-600"><Link href=""><MdAlternateEmail/></Link></li>
          <li className="px-2 hover:text-blue-700"><Link href=""><FaGithub/></Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
