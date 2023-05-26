'use client'
import { useEffect, useState } from 'react';
import "../styles/globals.css";

function Banner() {
  const [animationState, setAnimationState] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div 
      style={{
        height: '400px',
        backgroundImage: `url(https://cdn.discordapp.com/attachments/1110785495157461083/1111470323498496180/herobackopacity1.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 1
      }}
    >
      <div className="flex flex-col items-center justify-center font-bold px-1 py-1 h-full ">
     
        <div className="p-8 rounded-lg items-center justify-center text-center ${animationState ? 'animate-snake' : ''}`}">
          <h1 className="lg:text-5xl text-4xl" style={{ color: '#ECF87F' }}>Perfect Harmony</h1>
          <h1 className="lg:text-5xl text-4xl" style={{ color: '#ECF87F' }}>Trees and Gardens</h1>
          
          <h2 className="text-white pt-5 text-lg tracking-widest">
            Tree Trimming | Tree Removal | Garden and Playground Installations | And More!!!
          </h2>
          <button className="mt-10 px-4 py-2 bg-lime-300 text-gray-500  hover:text-lime-300 hover:bg-gray-500 transition-all duration-700 rounded-lg text-xl">Call to action</button>
          </div>
        </div>
      </div>
   
  );
}

export default Banner;