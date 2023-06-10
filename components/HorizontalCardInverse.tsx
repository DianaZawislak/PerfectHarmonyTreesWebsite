import React from 'react';
import Image from 'next/image';

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
          width: '100%', 
          position: 'relative',
          zIndex: 2,
          marginRight: '-20%',
          paddingLeft: '2%',
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'start',
          textAlign: 'start',
        }} >
          <div className='lg:w-2/3 '>
            <h1 className='text-2xl mb-2 tracking-wider text-start'>
              {header}
            </h1>
            <div className="h-1 w-1/3 bg-lime-300  mt-3 mb-4"></div>
            
            <h2 className='text-xl mb-2 tracking-wider text-start'>{subheader}</h2>
            <p className='ml-6 mr-12 text-start text-lg'>{text}</p>
            <p className='ml-6 mr-12 text-start text-lg'>{text}</p>
            <p className='ml-6 mr-12 text-start text-lg'>{text}</p>
            <button className="px-20 py-1 mt-10 bg-lime-300 text-gray-500  hover:text-lime-300 hover:bg-gray-500 transition-all duration-700  font-bold text-lg rounded-lg">
              CALL US TODAY
            </button> 
          </div>
        </div>
        <div style={{ 
          width: '50%', 
          position: 'relative', 
          zIndex: 1,
          marginLeft: '-30%',
        }}>
          <div style={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            height: '100%',
          }}>
            <Image
              src={imageUrl}
              alt="Box Image"
              layout='fill'
              objectFit="cover"
              className='rounded-lg'
            />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              background: 'linear-gradient(to right, rgba(255, 255, 255, 1), 70%, transparent)',
            }} />
          </div>
        </div>
      </div>
      {/* <hr className="my-4 border-gray-500" /> */}
    </>
  );
};

export default HorizontalCardInverse;


