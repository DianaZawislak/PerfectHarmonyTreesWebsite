import React from 'react';
import IndexCard from './indexCARD';
import ServicesIndexCards from './ServicesIndexCards';

interface contentProps {
  content: HeroCardArray;
}


const Services: React.FC<contentProps> = ({content}) => {
  return (
    <div>
      {/* <header className="text-center mx-auto mb-12 lg:px-20">
        <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
          What We Do
        </h2>
        <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
          tree and gardens and stuff idk man i like to climb up trees
        </p>
      </header> */}

      <div className="services-container" style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <IndexCard
            header="First Service"
            backgroundImage="https://cdn.discordapp.com/attachments/1103865788944875622/1115813522497093773/dianadetroit_simple_chainsaw_outline_for_icon_black_and_white_f65c15c8-ddf1-4fc3-823d-3ebac9520d5e.png"
            cardText="This is the content of the first service.This is the content of the first service.This is the content of the first service."
            ctaBtnTxt="Learn More"
          />
        </div>
        <div style={{ flex: 1 }}>
          <IndexCard
            header="Second Service"
            backgroundImage="https://cdn.discordapp.com/attachments/1103865788944875622/1115666168250912899/dianadetroit_tree_logo_black_and_white_d7deccd4-0856-4aec-80cb-c32e583920d1.png"
            cardText="This is the content of the first service.This is the content of the first service.This is the content of the first service."
            ctaBtnTxt="Learn More"
          />
          <ServicesIndexCards heroCards={content} />
        </div>
      </div>
    </div>
  );
};

export default Services;


