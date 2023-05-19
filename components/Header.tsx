'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';


import {
  FaceIcon,
  ImageIcon,
  SunIcon,
  DiscordLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
  HamburgerMenuIcon,
 
} from '@radix-ui/react-icons';
interface HeaderProps {
  menu: Menu ;
}
function Header({ menu }:HeaderProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
<div style={{ 
      backgroundImage: 'url(https://cdn.discordapp.com/attachments/1103865788944875622/1108941518154252329/navbarback.png)',  // replace with your image URL
      backgroundSize: 'cover',    // This will make sure your image covers the entire div
      backgroundRepeat: 'no-repeat'  // This will prevent the image from repeating

    }} className="flex items-center justify-between space-x-2 font-bold px-5">
      <div className="hidden md:flex items-center space-x-32 pr-10"> {/* Increase space-x value */}
        <Link href="/">
          <Image
            src="https://cdn.discordapp.com/attachments/1103865788944875622/1108960263820030022/logonobrgdyellowgreen.png"
            width={150}
            className="rounded-md"
            height={150}
            alt="logo"
            style={{ paddingRight: '1px' }}
          />
        </Link>
        <nav className="font-semibold text-md" style={{ color: '#ECF87F' }}> {/* Apply color */}
          <ul className="flex flex-row justify-end space-x-8 text-2xl">
            {menu.items.map((item:MenuItem, index, array) => (
              <li key={item?._key} className={index !== array.length - 1 ? 'border-r border-green-200 pr-8' : ''}>
                <Link href={item?.link}>
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <div className="md:hidden flex justify-between w-full items-center">
        <Link href="/">
          <Image
            src="https://cdn.discordapp.com/attachments/1103865788944875622/1108960263820030022/logonobrgdyellowgreen.png"
            width={100}
            className="rounded-md"
            height={100}
            alt="logo"
          />
        </Link>
        <button
          className="text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <HamburgerMenuIcon className="w-10 h-10"style={{ color: '#ECF87F' }} />
        </button>
      </div>
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden font-semibold text-md`}>
        <ul className="flex flex-col justify-end space-y-2 text-2xl">
          {menu.items.map((item:MenuItem, index, array) => (
            <li key={item?._key}>
              <Link href={item?.link}>
                {item?.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>

  );
}

export default Header;

