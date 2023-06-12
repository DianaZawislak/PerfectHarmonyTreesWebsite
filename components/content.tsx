import React from "react";
import IndexCard from "./indexCARD";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import IndexCARDwithImgBack from "./indexCARDwithImgBack";
import urlFor from "../lib/urlFor";
import Banner2 from "./Banner2";

interface contentProps {
  content: contentList;
}

const PageContent: React.FC<contentProps> = ({ content }) => {
  console.log(
    "content on my content page",
    urlFor(content.contentList[0].cards[1].backgroundImage)
  );
  const logoCards: HeroCardArray = content.contentList[0];
  const FullBGCards: HeroCardArray = content.contentList[1];
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const { y } = useSpring({
    y: inView ? 0 : 1,
  });

  return (
    <div id="SERVICES">
         <Banner2/>
      <animated.div
        ref={ref}
        style={{
          position: "relative",
          top: y.interpolate((value: number) => `${value * 400}px`),
        }}
      >
        <div
          className="services-container mb-11 gap-4 px-4 grid md:grid-cols-2 lg:grid-cols-2 justify-items-center grid-cols-1 mx-auto"
          style={{ maxWidth: "1800px" }}
        >
          {logoCards.cards.map((card, index) => (
            <div
              key={index}
              style={{ position: "relative", maxWidth: "800px" }}
            >
              <IndexCard
                header={card.title}
                backgroundImage={urlFor(card.backgroundImage).url()}
                cardText={card.cardText}
                ctaBtnTxt={card.ctaBtnTxt}
              />
            </div>
          ))}
        </div>

        <div
          className="services-container mb-11 gap-8 grid md:grid-cols-2 px-2 lg:grid-cols-3 justify-items-center grid-cols-1 mx-auto"
          style={{ maxWidth: "1800px" }}
        >
          {FullBGCards.cards.map((card, index) => (
            <div
              key={index}
              style={{ position: "relative", maxWidth: "400px" }}
            >
              <IndexCARDwithImgBack
                header={card.title}
                fullBackgroundImage={urlFor(card.backgroundImage).url()}
                backgroundImage={urlFor(card.logo).url()}
                cardText={card.cardText}
                ctaBtnTxt={card.ctaBtnTxt}
                modalheader={card.title}
                ModalText={card.cardText}
              />
            </div>
          ))}
        </div>
      </animated.div>
    </div>
  );
};

export default PageContent;
