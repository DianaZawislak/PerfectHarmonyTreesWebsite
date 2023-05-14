import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import { Button } from "./Button";

export type HeaderProps = {
  textColor?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
  imageSrc?: string;
};


export const Header: React.FC<HeaderProps> = ({ textColor, buttonColor, buttonHoverColor, imageSrc }) =>(
  <header className="relative">
    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
    <div className="mx-auto">
      <div className="relative shadow-xl sm:overflow-hidden">
        <div className="absolute inset-0">
          <Image
            priority
            fill
            className="h-full w-full object-cover"
            src={imageSrc || "/0_2.png"}
            alt="dude cutting tree"
          />
          <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
        </div>
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <p className={`relative left-0 right-0 mx-auto mt-5 max-w-xl text-center text-xl  font-semibold uppercase tracking-wide ${textColor || "text-orange-600"}`}>
            Perfect Harmony Trees and Gardens
          </p>
          <h1 className={`mt-1 text-center font-bold uppercase sm:text-5xl sm:tracking-tight lg:text-7xl ${textColor || "text-gray-900"}`}>
            <span className="block text-white">
              {" "}
              Tree trimming, tree removal, garden and playground installationsh
            </span>
          </h1>

          <div className="mx-auto mt-10 max-w-xs sm:flex sm:max-w-none sm:justify-center">
            <button className={`flex items-center justify-center rounded-md border border-transparent px-4 py-3 text-base font-medium shadow-sm sm:px-8 ${buttonColor || "bg-white"} ${buttonHoverColor || "hover:bg-orange-100"} text-${textColor || "text-orange-600"}`}>
              Learn more!
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
);
