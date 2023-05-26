'use client'
import { useEffect, useState } from 'react';
import "../styles/globals.css";
interface HeaderProps {
  hero: Hero;
}
function Banner({ hero }: HeaderProps) {
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
        <div className={`p-8 rounded-lg items-center justify-center text-center ${animationState ? 'animate-snake' : ''}`}>
          {hero.CTA_Main.map((text:string, index:number) => (
            <h1 key={index} className="lg:text-5xl text-4xl" style={{ color: '#ECF87F' }}>{text}</h1>
          ))}
          <h2 className="text-white pt-5 text-lg tracking-widest">
            {hero.ctaText_Subtitle.map((text:string, index:number) => (
              <span key={index}>{text}{index !== hero.ctaText_Subtitle.length - 1 ? ' | ' : ''}</span>
            ))}
          </h2>
          <button className="mt-10 px-4 py-2 bg-lime-300 text-gray-500  hover:text-lime-300 hover:bg-gray-500 transition-all duration-700 rounded-lg text-xl">Call to action</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;