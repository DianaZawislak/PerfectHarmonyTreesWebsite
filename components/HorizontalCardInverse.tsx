import React from 'react';

interface CardProps {
  imageUrl: string;
  header: string;
  subheader: string;
  text: string;
}

const HorizontalCardInverse: React.FC<CardProps> = ({ imageUrl, header, subheader, text }) => {
  return (
    <>
      <div style={{ display: 'flex', width: '100%' }} className="py-12">
        <div style={{ 
          width: '70%', 
          position: 'relative',
          zIndex: 2,
          marginRight: '-10%',
          paddingLeft: '10%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}>
          <div>
            <h1 className='text-2xl mb-2 tracking-wider'>
              {header}
            </h1>
            <h2 className='text-xl mb-2 tracking-wider'>{subheader}</h2>
            <p className='ml-6 mr-12'>{text}</p>
          </div>
        </div>
        <div style={{ 
          width: '40%', 
          position: 'relative', 
          zIndex: 1,
          marginLeft: '-10%',
        }}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to right, white, transparent)',
              maskImage: 'linear-gradient(to right, white, transparent)',
              maskPosition: 'left',
              maskSize: '50%',
            }}
          />
          <img 
            src={imageUrl} 
            alt="Box Image" 
            style={{ width: '100%', height: '100%' }} 
            className='rounded-lg' 
          />
        </div>
      </div>
      <hr className="my-4 border-gray-500" />
    </>
  );
};

export default HorizontalCardInverse;


