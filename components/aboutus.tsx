'use client'
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import HorizontalCard from './HorizontalCard'
import HorizontalCardInverse from './HorizontalCardInverse';

const Aboutus: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const { y } = useSpring({
    y: inView ? 0 : 1,
  });

  return (
    <div id="ABOUT" style={{ maxWidth: '1800px', margin: '0 auto' }}> {/* Wrap content within this div */}
      <animated.div
        ref={ref}
        style={{
          position: 'relative',
          top: y.interpolate((value: number) => `${value * 400}px`),
        }}
      >

        <HorizontalCardInverse
          header="WHO ARE WE"
          
          subheader='Lorem Ipsum'
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non metus ac ligula facilisis mollis et at urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non metus ac ligula facilisis mollis et at urna."
          imageUrl="https://cdn.discordapp.com/attachments/1103865788944875622/1115858998286098448/297795126_5545125695549951_5158975895880136470_n.jpg"
        />

      </animated.div>
    </div> /* End of the container div */
  );
};

export default Aboutus;


