import React, { useState } from "react";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import { RichTextComponents } from "./richTextCard";
import { PortableText } from "@portabletext/react";
interface CardProps {
  header: string;
  backgroundImage: string;
  fullBackgroundImage: string;
  cardText: string;
  ctaBtnTxt: string;
  modalheader: string;
  ModalText: Block[];
}

const IndexCARDwithImgBack: React.FC<CardProps> = ({
  header,
  backgroundImage,
  fullBackgroundImage,
  cardText,
  ctaBtnTxt,
  modalheader,
  ModalText,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    marginTop: isOpen ? "0px" : "-500px",
    marginRight: isOpen ? "100px" : "-100px",
    marginLeft: isOpen ? "100px" : "-100px",
    from: { opacity: 0, marginTop: "-500px" },
  });

  return (
    <div className="card-container relative">
      <Image
        src={fullBackgroundImage}
        alt="Full Background Image"
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-white"
      />
      <div className="relative flex flex-col items-center justify-center pb-10">
        <div
          className="mb-6 relative mt-3"
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
          <button
            onClick={openModal}
            className="px-20 py-1 bg-lime-300 text-gray-500 hover:text-lime-300 hover:bg-gray-500 transition-all duration-700 font-bold text-lg rounded-lg"
          >
            {ctaBtnTxt}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <animated.div style={animation} className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-xl mb-4">{modalheader}</h2>
            <PortableText
              value={ModalText}
              components={RichTextComponents}
            />
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-lime-300 text-gray-500 hover:text-lime-300 hover:bg-gray-500 transition-all duration-700 font-bold text-lg rounded-lg"
            >
              CLOSE
            </button>
          </animated.div>
        </div>
      )}
    </div>
  );
};

export default IndexCARDwithImgBack;
