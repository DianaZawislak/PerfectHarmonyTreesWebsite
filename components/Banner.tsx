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
        height: '800px',
        backgroundImage: `url(https://cdn.discordapp.com/attachments/1103865788944875622/1108964317447078009/heroback.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col items-center justify-center font-bold px-1 py-1 mb-1 h-full border border-lime-300">
     
        <div className="border border-lime-300 p-8 rounded-lg items-center justify-center text-center ${animationState ? 'animate-snake' : ''}`}">
          <h1 className="lg:text-7xl text-4xl" style={{ color: '#ECF87F' }}>Perfect Harmony</h1>
          <h1 className="lg:text-7xl text-4xl" style={{ color: '#ECF87F' }}>Tree and Gardens</h1>
          
          <h2 className="text-white pt-5 text-2xl tracking-widest">
            Tree Trimming | Tree Removal | Garden and Playground Installations | And More!!!
          </h2>
          <button className="mt-5 px-4 py-2 bg-lime-300 text-slate-800 rounded-lg text-xl">Call to action</button>
          </div>
        </div>
      </div>
   
  );
}

export default Banner;