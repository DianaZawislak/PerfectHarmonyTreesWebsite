import React from "react";
import Image from "next/image";

interface CardProps {
  header: string;
  backgroundImage: string;
  fullBackgroundImage: string; // This will be the new prop for the full background image
  cardText: string;
  ctaBtnTxt: string;
}

const IndexCARDwithImgBack: React.FC<CardProps> = ({ header, backgroundImage, fullBackgroundImage, cardText, ctaBtnTxt }) => {
  return (
    <div className="card-container relative"> 
      <Image // Full background image
        src={fullBackgroundImage}
        alt="Full Background Image"
        layout="fill"
        objectFit="cover"
        className="opacity-50" // This applies opacity
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-white" // This applies gradient
      />
      <div className="relative flex flex-col items-center justify-center pb-10">
        <div
          className="mb-6 relative"
          style={{ width: "80px", height: "80px" }}
        >
          <Image
            src={backgroundImage}
            alt="Card Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-md text-gray-900 font-bold mb-1">{header}</h1>
          <p className="text-gray-900 text-md mb-4 py-2 px-4 text-center">
            {cardText}
          </p>
          <button className="px-20 py-1 bg-lime-300 text-gray-500 hover:text-lime-300 hover:bg-gray-500 transition-all duration-700 font-bold text-lg rounded-lg">
            {ctaBtnTxt}
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndexCARDwithImgBack;
