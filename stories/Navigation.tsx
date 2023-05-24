import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import {
  FaceIcon,
  ImageIcon,
  SunIcon,
  DiscordLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";

// Define the props for the Navigation component
export type NavigationProps = {
  menu: any; // Assuming 'Menu' is the interface defined earlier
  logoSrc?: string;
};

const Navigation: React.FC<NavigationProps> = ({ menu, logoSrc }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Use the 'logoSrc' prop in your component
  return (
    <div
      style={{ backgroundColor: "rgba(160, 118, 70, 0.5)" }}
      className="flex items-center justify-between space-x-2 font-bold px-5"
    >
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src={
              logoSrc ||
              "https://cdn.discordapp.com/attachments/1103865788944875622/1107025245912703066/logonobrgd.png"
            }
            width={100}
            className="rounded-md"
            height={100}
            alt="logo"
          />
        </Link>
        <button
          className="text-2xl md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <HamburgerMenuIcon />
        </button>

        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block font-semibold text-md`}
        >
          <ul className="flex flex-col md:flex-row items-center">
            {menu.items.map((item:any) => (
              <li key={item._key}>
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="w-3/12 flex justify-end hidden sm:flex">
          <DiscordLogoIcon className="mr-4 w-[7rem] h-[7rem]" />
          <TwitterLogoIcon className="mr-4  w-[7rem] h-[7rem]" />
          <InstagramLogoIcon className="mr-4 w-[7rem] h-[7rem]" />
          <FaceIcon className="mr-4 w-[7rem] h-[7rem]" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
