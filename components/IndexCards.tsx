import React from "react";
import Image from "next/image";
import "../styles/globals.css";

interface CardProps {
  imageUrl: string;
  header: string;
  description: string;
  ctaText: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  header,
  description,
  ctaText,
}) => {
  return (
    <div className="card-container">
      <div className="shadow-lg flex flex-col items-center justify-center pb-5 px-12">
        <div className="mb-6 overflow-hidden rounded-full border-4 border-gray-500" style={{ width: "100px", height: "100px", position: "relative" }}>
          <Image src={imageUrl} alt="Card Image" layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col items-center justify-center max-w-md mx-auto">
          <h2 className="text-2xl text-gray-500 font-bold mb-2">{header}</h2>
          <p className="text-gray-500 text-md mb-4 text-center py-2">{description}</p>
          <button className="px-20 py-1 bg-lime-300 text-gray-500  hover:text-lime-300 hover:bg-gray-500 transition-all duration-700  font-bold text-lg rounded-lg">
            {ctaText}
          </button>
        </div>
      </div>
    </div>
  );
};

const IndexCards: React.FC = () => {
  return (
    <div className="cards-container flex justify-center items-start pt-11 mb-12 sm:mb-9">

      <Card
        imageUrl="https://cdn.discordapp.com/attachments/1103865788944875622/1109570197595107388/297795126_5545125695549951_5158975895880136470_n.jpg"
        header="Arbortist Service"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ctaText="Learn More"
      />
      <Card
        imageUrl="https://cdn.discordapp.com/attachments/1103865788944875622/1109565141370020022/168000900_4032798546782681_8241560606052318838_n.jpg"
        header="Garden Service"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ctaText="Learn More"
      />
            <Card
        imageUrl="https://cdn.discordapp.com/attachments/1103865788944875622/1109571134258696332/346969329_1380028732785287_3315446062634646354_n.jpg"
        header="Landscaping Service"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ctaText="Learn More"
      />
    </div>
  );
};

export default IndexCards;
