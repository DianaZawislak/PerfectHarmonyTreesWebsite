'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';



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

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    
    <div style={{ 
      backgroundImage: 'url(https://cdn.discordapp.com/attachments/1103865788944875622/1108941518154252329/navbarback.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }} className="flex items-center justify-between space-x-2 font-bold px-5">
      <div className="hidden md:flex items-center space-x-32 pr-10">
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
        <nav className="font-semibold text-md" style={{ color: '#ECF87F' }}>
          <ul className="flex flex-row justify-end space-x-8 text-lg">
            {menu.items.map((item:MenuItem, index, array) => (
              <li key={item?._key} className={index !== array.length - 1 ? 'border-r border-lime-200 pr-8' : ''}>
                <Link href={item?.link}>
                  {item?.title}
                </Link>
              </li>
            ))}
            <li className='pl-8'>
              <FontAwesomeIcon className= 'pr-5 pl-12 text-xl' icon={faPhone} style={{color: "#ecf87f"}} />
              <a href="tel:123-456-7890">123-456-7890</a>
            </li>
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
        <div className="flex items-center">
          <FontAwesomeIcon className= 'pr-2' icon={faPhone} style={{color: "#ecf87f"}} />
          <a href="tel:123-456-7890" style={{color: "#ecf87f"}} className="pr-5">123-456-7890</a>
          <button
            className="text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <HamburgerMenuIcon className="w-10 h-10"style={{ color: '#ECF87F' }} />
          </button>
        </div>
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

