"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
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
function Header({ menu }: HeaderProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  console.log(menu.logoUrl);
  return (
    <div
      style={{
        backgroundImage:
          "url(https://cdn.discordapp.com/attachments/1103865788944875622/1110753466034438194/navbarback2.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="flex items-center justify-between space-x-2 font-bold px-5"
    >
      <div className="hidden md:flex items-center space-x-32 pr-10 justify-between w-full">
        <div className="flex items-center space-x-10">
          <Link href="/">
            <Image
              src={menu.logoUrl}
              width={100}
              className="rounded-md"
              height={100}
              alt="logo"
              style={{ paddingRight: "1px" }}
            />
          </Link>
          <nav className="font-semibold text-md" style={{ color: "#ECF87F" }}>
            <ul className="flex flex-row space-x-8 text-lg  ">
              {menu.items.map((item: MenuItem, index: any, array: any) => (
                <li
                  key={item?._key}
                  className={`border-r border-lime-200 pr-8 hover:text-gray-500 ${
                    index !== array.length - 1 ? "" : "border-r-0"
                  }`}
                >
                  <Link href={item?.link}>{item?.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="pl-8 flex items-center">
          <FontAwesomeIcon
            className="pr-5 pl-12 text-2xl"
            icon={faPhone}
            style={{ color: "#ecf87f" }}
          />
          <a
            href="tel:123-456-7890"
            className="text-lime-300 text-xl hover:text-gray-500"
          >
            123-456-7890
          </a>
        </div>
      </div>

      <div className="md:hidden flex justify-between w-full items-center">
        <Link href="/">
          <img
            src={menu.logoUrl}
            className="rounded-md w-20 h-20 object-contain"
            alt="logo"
          />
        </Link>
        <div className="flex items-center">
          <FontAwesomeIcon
            className="pr-2"
            icon={faPhone}
            style={{ color: "#ecf87f" }}
          />
          <a
            href="tel:123-456-7890"
            style={{ color: "#ECF87F" }}
            className="text-lime-300 pr-5 hover:text-amber-800"
          >
            123-456-7890
          </a>
       
        </div>
      </div>

      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden font-semibold text-md`}
      >
        <DropdownMenuPrimitive.Root>
          <DropdownMenuPrimitive.Trigger asChild>
          <button
            className="text-2xl text-lime-300  hover:text-gray-500"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <HamburgerMenuIcon
              className="w-6 h-6  hover:text-amber-800"
              style={{ color: "#ECF87F" }}
            />
          </button>
          </DropdownMenuPrimitive.Trigger>
          <DropdownMenuPrimitive.Content
            align="end"
            sideOffset={5}
            className="w-48 rounded-lg px-1.5 py-1 shadow-md bg-white dark:bg-gray-800 z-50"
          >
            <DropdownMenuPrimitive.Item
              className={`flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none `}
            >
              <ul className="flex flex-col justify-end space-y-2 text-2xl">
                {menu.items.map((item: MenuItem) => (
                  <li key={item?._key}>
                    <Link href={item?.link}>{item?.title}</Link>
                  </li>
                ))}
              </ul>
            </DropdownMenuPrimitive.Item>
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Root>
      </nav>
    </div>
  );
}

export default Header;
