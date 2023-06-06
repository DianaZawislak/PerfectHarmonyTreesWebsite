import React from 'react';
import IndexCard from './IndexCard';

const Services: React.FC = () => {
  return (
    <div>
      <header className="text-center mx-auto mb-12 lg:px-20">
        <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
          What We Do
        </h2>
        <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
          tree and gardens and stuff idk man i like to climb up trees
        </p>
      </header>

      <div className="services-container" style={{ display: 'flex' }}>
        <div>
          <IndexCard
            header="First Service"
            backgroundImage="https://cdn.discordapp.com/attachments/1103865788944875622/1115666168250912899/dianadetroit_tree_logo_black_and_white_d7deccd4-0856-4aec-80cb-c32e583920d1.png"
            cardText="This is the content of the first service."
            ctaBtnTxt="Learn More"
          />
        </div>
        <div>
          <IndexCard
            header="Second Service"
            backgroundImage="https://cdn.discordapp.com/attachments/1103865788944875622/1115666168250912899/dianadetroit_tree_logo_black_and_white_d7deccd4-0856-4aec-80cb-c32e583920d1.png"
            cardText="This is the content of the second service."
            ctaBtnTxt="Learn More"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

