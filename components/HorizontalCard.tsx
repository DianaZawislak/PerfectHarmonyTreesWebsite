import React from 'react';

interface CardProps {
  imageUrl: string;
  header: string;
  subheader: string;
  text: string;
}

const HorizontalCard: React.FC<CardProps> = ({ imageUrl, header,subheader, text }) => {
  return (
    <>
    <div style={{ display: 'flex', width: '100%' }} className='py-12 '>
      <div style={{ width: '33%' }}>
        <img src={imageUrl} alt="Box Image" style={{ width: '100%', height: '100%', opacity: 0.5 }} className='border-4 border-gray-500 rounded-lg'/>
      </div>
  
      <div style={{ width: '67%', padding: '1px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'  }} >
      <h1 className=' text-2xl mb-2 tracking-wider'>{header}</h1> 
      <h2 className=' text-xl mb-2 tracking-wider'>{subheader}</h2>
        <p className='ml-16 mr-6'>{text}</p>
      </div>
    </div>
   
    </>
  );
};

export default HorizontalCard;

