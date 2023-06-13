"use client";
import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import HorizontalCard from "./HorizontalCard";
import HorizontalCardInverse from "./HorizontalCardInverse";
import urlFor from "../lib/urlFor";
interface contentProps {
  content: contentList;
}
const Aboutus: React.FC<contentProps> = ({ content }) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const { y } = useSpring({
    y: inView ? 0 : 1,
  });
  const cardData: HeroCard = content.contentList[0].cards[0];
  return (
    <div id={content.title} style={{ maxWidth: "1800px", margin: "0 auto" }}>
      {" "}
      {/* Wrap content within this div */}
      <animated.div
        ref={ref}
        style={{
          position: "relative",
          top: y.interpolate((value: number) => `${value * 400}px`),
        }}
      >
        <HorizontalCardInverse
          header={cardData.title}
          subheader="Lorem Ipsum"
          text={cardData.cardText}
          imageUrl={urlFor(cardData.backgroundImage).url()}
          btnTXT={cardData.ctaBtnTxt}
        />
      </animated.div>
    </div> /* End of the container div */
  );
};

export default Aboutus;
