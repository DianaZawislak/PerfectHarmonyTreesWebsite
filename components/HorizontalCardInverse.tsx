import React from 'react';

interface CardProps {
  imageUrl: string;
  header: string;
  text: string;
}

const HorizontalCardInverse: React.FC<CardProps> = ({ imageUrl, header,text }) => {
  return (
    <>
    <div style={{ display: 'flex', width: '100%' }} className="py-12">
            <div style={{ width: '67%', padding: '1px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'  }} >
            <h1 className=' text-2xl mb-2 tracking-widest'>
          {header}
          </h1> 
        <p className='ml-6 mr-12'>{text}</p>
      </div>
      <div style={{ width: '33%' }}>
        <img src={imageUrl} alt="Box Image" style={{ width: '100%', height: '100%' }} className='border-4 border-gray-500 rounded-lg'/>
      </div>
  

    </div>
    <hr className="my-4 border-gray-500" />
    </>
  );
};

export default HorizontalCardInverse;

