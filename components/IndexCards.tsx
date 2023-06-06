import React from "react";
import Image from "next/image";
import "../styles/globals.css";
import urlFor from "../lib/urlFor";

interface CardProps {
  card: HeroCard;
}


const Card: React.FC<CardProps> = ({ card }) => {
  const { title, backgroundImage, cardText, ctaBtnTxt } = card;

  return (
    <div className="card-container">
      <div className="shadow-lg flex flex-col items-center justify-center pb-5 px-12">
        <div
          className="mb-6"
          style={{ width: "100px", height: "100px", position: "relative" }}
        >
          <Image
            src={urlFor(backgroundImage).url()}
            alt="Card Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center max-w-md mx-auto">
          <h2 className="text-xl text-gray-500 font-bold mb-1">{title}</h2>
          <p className="text-gray-500 text-md mb-4 text-center py-1 px-18">
            {cardText}
          </p>
          {/* <button className="px-20 py-1 bg-lime-300 text-gray-500  hover:text-lime-300 hover:bg-gray-500 transition-all duration-700  font-bold text-lg rounded-lg">
            {ctaBtnTxt}
          </button> */}
        </div>
      </div>
    </div>
  );
};

const IndexCards: React.FC<{ heroCards: HeroCardArray}> = ({ heroCards }) => {
  return (
    <div className="cards-container flex justify-center items-start pt-11 mb-12 sm:mb-9">
      {heroCards.cards.map((heroCard, index) => (
        <Card key={index} card={heroCard} />
      ))}
    </div>
  );
};

export default IndexCards;
