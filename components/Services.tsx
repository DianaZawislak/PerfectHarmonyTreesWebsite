import React from 'react';
import IndexCard from './indexCARD';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import IndexCARDwithImgBack from './indexCARDwithImgBack';

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
    <animated.div
      ref={ref}
      style={{
        position: 'relative',
        top: y.interpolate((value: number) => `${value * 400}px`),
      }}
    >
<div className="services-container mb-11 gap-4 px-4 grid md:grid-cols-2 lg:grid-cols-2 justify-items-center grid-cols-1 mx-auto" style={{ maxWidth: '1800px' }}>
<div style={{ position: 'relative', maxWidth: '800px' }}> 

    <IndexCard
      header="FIRST SERVICE"
     
      backgroundImage="https://cdn.discordapp.com/attachments/1103865788944875622/1115813522497093773/dianadetroit_simple_chainsaw_outline_for_icon_black_and_white_f65c15c8-ddf1-4fc3-823d-3ebac9520d5e.png"
      cardText="This is the content of the first service.This is the content of the first service.
      This is the content of the first service.This is the content of the first service.This is the content of the first service.This is the content of the first service."
      ctaBtnTxt="Learn More"
    />
  </div>
  <div style={{ position: 'relative', maxWidth: '800px' }}> 

    <IndexCard
      header="SECOND SERVICE"
      backgroundImage="https://cdn.discordapp.com/attachments/1103865788944875622/1115666168250912899/dianadetroit_tree_logo_black_and_white_d7deccd4-0856-4aec-80cb-c32e583920d1.png"
      cardText="This is the content of the first service.This is the content of the first service.This is the content of the first service.
      This is the content of the first service.This is the content of the first service.This is the content of the first service"
      ctaBtnTxt="Learn More"
    />
  </div>
</div>

<div className="services-container mb-11 gap-8 grid md:grid-cols-2 px-2 lg:grid-cols-3 justify-items-center grid-cols-1 mx-auto" style={{ maxWidth: '1800px' }}>
<div style={{ position: 'relative', maxWidth: '400px' }}> 

    <IndexCARDwithImgBack
      header="SECOND SERVICE"
      fullBackgroundImage='https://cdn.discordapp.com/attachments/1110785495157461083/1117234852308189325/346969329_1380028732785287_3315446062634646354_n.jpg'
      backgroundImage="https://cdn.discordapp.com/attachments/1103865788944875622/1115666168250912899/dianadetroit_tree_logo_black_and_white_d7deccd4-0856-4aec-80cb-c32e583920d1.png"
      cardText="This is the content of the first service.This is the content of the first service.This is the content of the first service.
      This is the content of the first service.This is the content of the first service.This is the content of the first service"
      ctaBtnTxt="Learn More"
    />
  </div>
  <div style={{ position: 'relative', maxWidth: '400px' }}> 

    <IndexCARDwithImgBack
      header="SECOND SERVICE"
      fullBackgroundImage='https://cdn.discordapp.com/attachments/1110785495157461083/1117234504835289138/168000900_4032798546782681_8241560606052318838_n.jpg'
      backgroundImage="https://cdn.discordapp.com/attachments/1103865788944875622/1115666168250912899/dianadetroit_tree_logo_black_and_white_d7deccd4-0856-4aec-80cb-c32e583920d1.png"
      cardText="This is the content of the first service.This is the content of the first service.This is the content of the first service.
      This is the content of the first service.This is the content of the first service.This is the content of the first service"
      ctaBtnTxt="Learn More"
    />
  </div>

  <div style={{ position: 'relative', maxWidth: '400px' }}> 

    <IndexCARDwithImgBack
      header="SECOND SERVICE"
      fullBackgroundImage='https://cdn.discordapp.com/attachments/1110785495157461083/1117234020489629816/336567321_1415091715957877_1358520114622384673_n.jpg'
      backgroundImage="https://cdn.discordapp.com/attachments/1103865788944875622/1115666168250912899/dianadetroit_tree_logo_black_and_white_d7deccd4-0856-4aec-80cb-c32e583920d1.png"
      cardText="This is the content of the first service.This is the content of the first service.This is the content of the first service.
      This is the content of the first service.This is the content of the first service.This is the content of the first service"
      ctaBtnTxt="Learn More"
    />
  </div>
</div>

    </animated.div>
  );
};

export default Services;

