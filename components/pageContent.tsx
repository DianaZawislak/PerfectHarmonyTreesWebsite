"use client";

import Banner from "./Banner";
import Banner2 from "./Banner2";
import IndexCards from "./IndexCards";

import AboutUs from "./aboutus";
import Services from "./Services";
import { QueryParams } from "sanity";
import { useEffect, useState } from "react";
import PageContent from "./content";
import Header from "./Navbar";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "./richTextCard";
interface PageProps {
  content: PageContent;
}

function MainPage({ content }: PageProps) {
  const hero: Hero = content?.hero;
  const cards: contentList = content?.mainContent[0];
  const serviceContent: contentList = content?.mainContent[1];
  const About: PortableTextCard = content.portableTextContent[0];
  return (
    <>
      <div className="relative">
        {hero && <Banner hero={hero} />}
        <div className="absolute bottom-0 w-full mt-11">
          {cards && <IndexCards content={cards} />}
        </div>
      </div>
      {/* <Banner2 />*/}

      {serviceContent && <PageContent content={serviceContent} />}

      {/*cards && <Services content={cards} />*/}
      {About && <AboutUs content={About} />}
      {/* <HcardsIndex /> */}

      <style jsx>{`
        @media (max-width: 768px) {
          .relative {
            display: flex;
            flex-direction: column;
          }

          .absolute {
            position: static;
          }
        }
      `}</style>
    </>
  );
}

export default MainPage;
