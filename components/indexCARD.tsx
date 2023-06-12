import React from "react";
import Image from "next/image";
import "../styles/globals.css";

interface CardProps {
  header: string;
  backgroundImage: string;
  cardText: string;
  ctaBtnTxt: string;
}

const IndexCard: React.FC<CardProps> = ({ header, backgroundImage, cardText, ctaBtnTxt }) => {
  return (
    <div className="card-container">
      <div className=" flex flex-col items-center justify-center pb-10 ">
        <div
          className="mb-6"
          style={{ width: "80px", height: "80px", position: "relative" }}
        >
          <Image
            src={backgroundImage}
            alt="Card Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className=" flex flex-col items-center justify-center ">
          <h1 className="text-md text-gray-500 font-bold mb-1">{header}</h1>
          <p className="text-gray-500 text-md mb-4 px-15 text-center ">
            {cardText}
          </p>
          {/* Uncomment the button if needed */}
           <button className="px-20 py-1 bg-lime-300 text-gray-500  hover:text-lime-300 hover:bg-gray-500 transition-all duration-700  font-bold text-lg rounded-lg">
            {ctaBtnTxt}
          </button> 
        </div>
      </div>
    </div>
  );
};

export default IndexCard;
