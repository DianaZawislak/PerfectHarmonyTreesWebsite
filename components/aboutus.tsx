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
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
            What We Do
          </h2>
          <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            tree and gardens and stuff idk man i like to climb up tree's
          </p>
        </header>
        <IndexCards heroCards={content} />
        <IndexCards heroCards={content} />
      </div>{" "}
    </div>
  );
}
export default AboutUs;
