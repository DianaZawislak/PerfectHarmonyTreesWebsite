import IndexCards from "./IndexCards";

import React from "react";
import Image from "next/image";
import "../styles/globals.css";
import urlFor from "../lib/urlFor";
interface contentProps {
  content: HeroCardArray;
}

function AboutUs({ content }: contentProps) {
  console.log(content);
  return (
    <div
      id="services"
      className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white"
    >

        
        <IndexCards heroCards={content} />
      </div>
    
  );
}
export default AboutUs;
