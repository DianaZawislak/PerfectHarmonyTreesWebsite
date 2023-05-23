import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import { Button } from "./Button";

export const Banner2: React.FC = ({}) => (
  <div
    className="container-banner2 px-10 py-10"
    style={{ backgroundColor: "rgba(143, 151, 121, .5)" }}
  >
    <h1 className="text-5xl text-[#DAA520]">
      Perfect Harmony Trees and Gardens
    </h1>

    <p className="mt-1 md:mt-2 text-black">
      Transforming Nature with Care - From Tree Removal to Playground
      Installation and Beyond. We Recycle, Renew, and Reinvigorate Your Yard!"
    </p>
    <p className="mt-1 md:mt-2 text-black">
      Your Eco-Conscious Landscape Partner, Bringing New Life to Trees
    </p>
    <p className="mt-1 md:mt-2 text-black">
      Creating Sustainable Outdoor Spaces
    </p>
    <p className="mt-1 md:mt-2 text-black">
      Turning Trees into Treasured Spaces
    </p>
  </div>
);
