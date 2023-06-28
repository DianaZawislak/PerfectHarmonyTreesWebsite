"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import urlFor from "../lib/urlFor";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  FaceIcon,
  ImageIcon,
  SunIcon,
  DiscordLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
interface HeaderProps {
  menu: Menu; 
}

const Header = ({ menu }: any) => {
 // const logo=urlFor(pageContent.Menulogo).url(); 
//  const background=urlFor(pageContent.MenuBackground).url();


  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);



  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroll2El = (elID: string) => {
    const element = document.getElementById(elID);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };
  const onBtnClick = (e: any) => {
    e.preventDefault();
    const goto = e.target.getAttribute("goto");
    setTimeout(() => {
      scroll2El(goto);
    }, 100);
  };

  return (
    <div
      style={{
        backgroundImage:
          `url(${menu.menuBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={`flex items-center justify-between space-x-2 font-bold sticky top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "h-14" : "h-24"
      }`}
    >
      <div className="items-center justify-between hidden w-full pr-10 space-x-32 md:flex">
        <div className="flex items-center space-x-10">
          <Link href="/">
            <Image
                src={menu.logo}
              width={scrolled ? 70 : 100}
              className="rounded-md transition-all duration-500 ease-in-out"
              height={scrolled ? 70 : 100}
              alt="logo"
              style={{ paddingRight: "1px" }}
            />
          </Link>
          <nav className="font-semibold text-md text-black">
            <ul className="flex flex-row space-x-8 lg:text-lg sm:text-sm">
              {menu.menu.map((item: any, index: number, array: []) => (
                <li
                  key={item}
                  className={`border-r border-black pr-8 hover:text-gray-500 ${
                    index !== array.length - 1 ? "" : "border-r-0"
                  }`}
                >
                  <button
                    onClick={() => scroll2El(item)}
                    className="overflow-hidden text-overflow-ellipsis whitespace-nowrap"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center pl-8 text-overflow-ellipsis whitespace-nowrap">
          <FontAwesomeIcon
            className="pl-12 pr-5 text-2xl"
            icon={faPhone}
            style={{ color: "#111111" }}
          />
          <Link
            href="tel:123-456-7890"
            className="text-2xl md:text-lg text-black hover:text-gray-500"
          >
            123-456-7890
          </Link>
        </div>
      </div>

      {/* Below are settings for menu on small screen */}

      <div className="flex items-center justify-between w-full md:hidden">
        <Link href="/">
          <Image
            src={menu.logo}
            width={50}
            className="rounded-md"
            height={50}
            alt="logo"
          />
        </Link>
        <div className="flex items-center justify-end w-full md:hidden">
          <div>
            <FontAwesomeIcon
              className="pr-2"
              icon={faPhone}
              style={{ color: "#111111" }}
            />
            <a
              href="tel:123-456-7890"
              style={{ color: "#111111" }}
              className="pr-28 text-black hover:text-amber-800"
            >
              123-456-7890
            </a>
          </div>

          <DropdownMenuPrimitive.Root>
            <DropdownMenuPrimitive.Trigger asChild>
              <button
                className="text-2xl text-black hover:text-gray-500"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <HamburgerMenuIcon
                  className="w-6 h-6 pr-2 hover:text-amber-800"
                  style={{ color: "#111111" }}
                />
              </button>
            </DropdownMenuPrimitive.Trigger>
            <DropdownMenuPrimitive.Content
              align="end"
              sideOffset={5}
              className={`w-30 px-1.5 py-1 mt-7 shadow-md bg-white z-50 ${
                isMenuOpen ? "open" : ""
              }`}
            >
              <DropdownMenuPrimitive.Item
                className={`flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none `}
              >
                <ul className="flex flex-col justify-end space-y-2 text-sm">
                  {menu.menu.map((item: any, index: number, array: []) => (
                    <li
                      key={item}
                      className={`pr-8 hover:text-gray-500 ${
                        index !== array.length - 1 ? "" : "border-r-0"
                      }`}
                    >
                      <button
                        onClick={() => scroll2El(item)}
                        className="overflow-hidden text-overflow-ellipsis whitespace-nowrap"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </DropdownMenuPrimitive.Item>
            </DropdownMenuPrimitive.Content>
          </DropdownMenuPrimitive.Root>
        </div>
      </div>
    </div>
  );
};
export default Header;



