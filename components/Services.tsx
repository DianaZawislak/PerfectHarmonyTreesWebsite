import React from 'react';
import IndexCard from './indexCARD';
import ServicesIndexCards from './ServicesIndexCards';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

interface contentProps {
  content: HeroCardArray;
}

const Services: React.FC<contentProps> = ({content}) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const { y } = useSpring({
    y: inView ? 0 : 1,
  });

  return (
    <div id="SERVICES">
    <animated.div
      ref={ref}
      style={{
        position: 'relative',
        top: y.interpolate((value: number) => `${value * 400}px`),
      }}
    >
<div className="services-container mb-11 grid md:grid-cols-2 lg:grid-cols-2 justify-items-center grid-cols-1 mx-auto" style={{ maxWidth: '1800px' }}>
<div style={{ position: 'relative', maxWidth: '800px' }}> 
    <div style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity:'0.1',
      zIndex: -1
    }} />
    <IndexCard
      header="FIRST SERVICE"
      backgroundImage="https://cdn.discordapp.com/attachments/1103865788944875622/1115813522497093773/dianadetroit_simple_chainsaw_outline_for_icon_black_and_white_f65c15c8-ddf1-4fc3-823d-3ebac9520d5e.png"
      cardText="This is the content of the first service.This is the content of the first service.
      This is the content of the first service.This is the content of the first service.This is the content of the first service.This is the content of the first service."
      ctaBtnTxt="Learn More"
    />
  </div>
  <div style={{ position: 'relative', maxWidth: '800px' }}> 
    <div style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: '0.1',
      zIndex: -1
    }} />
    <IndexCard
      header="SECOND SERVICE"
      backgroundImage="https://cdn.discordapp.com/attachments/1103865788944875622/1115666168250912899/dianadetroit_tree_logo_black_and_white_d7deccd4-0856-4aec-80cb-c32e583920d1.png"
      cardText="This is the content of the first service.This is the content of the first service.This is the content of the first service.
      This is the content of the first service.This is the content of the first service.This is the content of the first service"
      ctaBtnTxt="Learn More"
    />
  </div>
</div>

<div className="services-container mb-11 grid md:grid-cols-2 lg:grid-cols-3 justify-items-center grid-cols-1 mx-auto" style={{ maxWidth: '1800px' }}>
<div style={{ position: 'relative', maxWidth: '400px' }}> 
    <div style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity:'0.1',
      zIndex: -1
    }} />
    <IndexCard
      header="FIRST SERVICE"
      backgroundImage="https://cdn.discordapp.com/attachments/1103865788944875622/1115813522497093773/dianadetroit_simple_chainsaw_outline_for_icon_black_and_white_f65c15c8-ddf1-4fc3-823d-3ebac9520d5e.png"
      cardText="This is the content of the first service.This is the content of the first service.
      This is the content of the first service.This is the content of the first service.This is the content of the first service.This is the content of the first service."
      ctaBtnTxt="Learn More"
    />
  </div>
  <div style={{ position: 'relative', maxWidth: '400px' }}> 
    <div style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: '0.1',
      zIndex: -1
    }} />
    <IndexCard
      header="SECOND SERVICE"
      backgroundImage="https://cdn.discordapp.com/attachments/1103865788944875622/1115666168250912899/dianadetroit_tree_logo_black_and_white_d7deccd4-0856-4aec-80cb-c32e583920d1.png"
      cardText="This is the content of the first service.This is the content of the first service.This is the content of the first service.
      This is the content of the first service.This is the content of the first service.This is the content of the first service"
      ctaBtnTxt="Learn More"
    />
  </div>

  <div style={{ position: 'relative', maxWidth: '400px' }}> 
    <div style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: '0.1',
      zIndex: -1
    }} />
    <IndexCard
      header="SECOND SERVICE"
      backgroundImage="https://cdn.discordapp.com/attachments/1103865788944875622/1115666168250912899/dianadetroit_tree_logo_black_and_white_d7deccd4-0856-4aec-80cb-c32e583920d1.png"
      cardText="This is the content of the first service.This is the content of the first service.This is the content of the first service.
      This is the content of the first service.This is the content of the first service.This is the content of the first service"
      ctaBtnTxt="Learn More"
    />
  </div>
</div>

    </animated.div>
    </div>
  );
};

export default Services;

