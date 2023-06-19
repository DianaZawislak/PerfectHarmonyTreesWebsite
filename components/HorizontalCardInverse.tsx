import React from "react";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import { RichTextComponents } from "./richTextCard";
import { PortableText } from "@portabletext/react";

interface CardProps {
  card: PortableTextCard;
}

const HorizontalCardInverse: React.FC<CardProps> = ({ card }) => {
  return (
    <>
      <div style={{ display: "flex", width: "100%" }} className="py-12">
        <div
          style={{
            width: "100%",
            position: "relative",
            zIndex: 2,
            marginRight: "-20%",
            paddingLeft: "2%",
            display: "flex",
            alignItems: "start",
            justifyContent: "start",
            textAlign: "start",
          }}
        >
          <div className="lg:w-2/3 ">
            <h1 className="text-2xl mb-2 tracking-wider text-start">
              {card.title}
            </h1>
            <PortableText
              value={card.mainText}
              components={RichTextComponents}
            />

            <button className="px-20 py-1 mt-10 bg-lime-300 text-gray-500  hover:text-lime-300 hover:bg-gray-500 transition-all duration-700  font-bold text-lg rounded-lg">
              {card.ctaBtnTxt}
            </button>
          </div>
        </div>
        <div
          style={{
            width: "50%",
            position: "relative",
            zIndex: 1,
            marginLeft: "-30%",
          }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src={urlFor(card.backgroundImage).url()}
              alt="Box Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                background:
                  "linear-gradient(to right, rgba(255, 255, 255, 1), 70%, transparent)",
              }}
            />
          </div>
        </div>
      </div>
      {/* <hr className="my-4 border-gray-500" /> */}
    </>
  );
};

export default HorizontalCardInverse;
