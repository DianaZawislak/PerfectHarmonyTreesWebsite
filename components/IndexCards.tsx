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
    <div className="card-container" style={{minWidth: '30vw'}} >
      <div
        className="shadow-lg flex flex-col items-center justify-start pb-5 px-12"
        style={{ minHeight: "300px" }}
      >
        <div
          className="mb-6"
          style={{ width: "60px", height: "60px", position: "relative" }}
        >
          <Image
            src={urlFor(backgroundImage).url()}
            alt="Card Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col items-center justify-start max-w-md mx-auto">
          <h2 className="text-md text-gray-500 font-bold mb-1">{title}</h2>
          <p className="text-gray-500 text-md mb-4 text-center py-1 px-1">
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

const IndexCards: React.FC<{ content: contentList }> = ({ content }) => {

const heroCards:HeroCardArray= content.contentList[0];

  return (
    <div id={content.title} className="cards-container flex justify-center items-center pt-11 mb-12 sm:mb-9"
    >
      
      {heroCards.cards.map((heroCard, index) => (
        <Card key={index} card={heroCard} />
      ))}
      <style jsx>{`
        @media (max-width: 600px) {
          .card_container {
            min-width: 100vw;
          }

          .cards-container {
            min-width: 100vw;
            flex-direction: column;
            align-items: flex-start;
            position: absolute;
            margin-top: -400px;
            top: -300px; /* Adjust the value as needed */
          }
          
          .card-container {
            width: 100%;
            margin-bottom: 120px;
            top-margin: 40px !important; /* Increase the spacing between cards on small screens */
          }
        }

        @media (max-width: 834px) {
          .card_container {
            min-width: 100vw;
          

          }
          
          .cards-container {
            min-width: 100vw;
            flex-direction: column;
            align-items: center;
            position: relative;
            margin-top: -400px;
            top: -300px; /* Adjust the value as needed */
          }
          
          .card-container {
            width: 100%;
            margin-bottom: 120px;
            top-margin: 40px !important; /* Increase the spacing between cards on small screens */
          }
        }


        @media (max-width: 1800px) {
          .cards-container {
            width: 33vw;
            align-items: flex-start;
            position: relative;
            top: 100px; /* Adjust the value as needed */
          }
          
          .card-container {
            margin-bottom: 120px;
            top-margin: 40px !important; /* Increase the spacing between cards on small screens */
          }
        }
      `}</style>
    </div>
  );
};

export default IndexCards;