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
    <div style={{ backgroundColor: 'rgba(160, 118, 70, 0.5)' }} className="flex items-center justify-between space-x-2 font-bold px-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://cdn.discordapp.com/attachments/1103865788944875622/1107025245912703066/logonobrgd.png"
            width={100}
            className="rounded-md"
            height={100}
            alt="logo"
          />
        </Link>
        </div>
        <div className="flex items-center space-x-2">
        <button
          className="text-2xl md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <HamburgerMenuIcon />
        </button>

        <nav
          className={`${isMenuOpen ? 'block' : 'hidden'} md:block font-semibold text-md`}
        >
          <ul className="flex flex-col md:flex-row justify-end space-x-5 ">
            {menu.items.map((item:MenuItem) => (
              <li key={item?._key}>
                <Link href={item?.link}>
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

       {/*  <div className=" flex justify-end hidden sm:flex pl-11">
          <DiscordLogoIcon className="mr-4 w-[2rem] h-[7rem]" />
          <TwitterLogoIcon className="mr-4  w-[2rem] h-[7rem]" />
          <InstagramLogoIcon className="mr-4 w-[2rem] h-[7rem]"/>
          <FaceIcon className="mr-4 w-[2rem] h-[7rem]"/>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
