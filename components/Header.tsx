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
  const scroll2El = (elID: string) => {
    window.scrollTo({
      top: document.getElementById(elID).offsetTop - 60,
      behavior: 'smooth',
    });
  };

const onBtnClick = (e) => {
    e.preventDefault();
    const goto = e.target.getAttribute('goto');
    setTimeout(() => {
      scroll2El(goto);
    }, 100);
  }

  return (
    <div
      style={{
        backgroundImage:
          "url(https://cdn.discordapp.com/attachments/1110785495157461083/1114360153211416717/navbarwhite.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="flex items-center justify-between space-x-2 font-bold"
    >
      <div className="items-center justify-between hidden w-full pr-10 space-x-32 md:flex">
        <div className="flex items-center space-x-10">
          <Link href="/"
          >
            <Image
              src="https://cdn.discordapp.com/attachments/1110785495157461083/1114361925002854501/logonobrgd.png"
              width={100}
              className="rounded-md"
              height={100}
              alt="logo"
              style={{ paddingRight: "1px" }}
            />
          </Link>
          <nav className="font-semibold text-md text-black">
            <ul className="flex flex-row space-x-8 lg:text-lg sm:text-sm">
              {menu.items.map((item: MenuItem, index: any, array: any) => (
                <li
                  key={item?._key}
                  className={`border-r border-black pr-8 hover:text-gray-500 ${
                    index !== array.length - 1 ? "" : "border-r-0"
                  }`}
                >
                      <Link href={item?.link} className="overflow-hidden text-overflow-ellipsis whitespace-nowrap">
      {item?.title}
    </Link>
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
          <a
            href="tel:123-456-7890"
            className="text-2xl md:text-lg text-black hover:text-gray-500"
          >
            123-456-7890
          </a>
          <button  className="overflow-hidden text-overflow-ellipsis whitespace-nowrap" goto="firstCard" onClick={onBtnClick}>Contact</button >
        </div>
      </div>


{/* Below are settings for menu on small screen */}


      <div className="flex items-center justify-between w-full md:hidden">
        <Link href="/">
          <Image
            src={menu.logoUrl}
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
        </div>
      </div>
    </div>
  );
}
export default Header;
