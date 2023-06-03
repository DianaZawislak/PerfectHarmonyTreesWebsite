'use client'
import { useEffect, useState } from 'react';
import "../styles/globals.css";
import urlFor from "../lib/urlFor";

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
        height: '900px',
        position: 'relative'
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url(${urlFor(hero.backgroundImage).url()})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 0.5,
        zIndex: -1
      }}/>
      <div className="flex flex-col items-center justify-start font-bold px-1 py-1 h-full pt-36">
        <div className={`p-8 rounded-lg items-center justify-center text-center ${animationState ? 'animate-snake' : ''}`}>
          {hero.CTA_Main.map((text:string, index:number) => (
            <h1 key={index} className="lg:text-5xl text-4xl text-lime-300 p-2 bg-black bg-opacity-10 rounded-md">{text}</h1>
          ))}
          <h2 className="text-black pt-2 text-xl tracking-widest">
            {hero.ctaText_Subtitle.map((text:string, index:number) => (
              <span key={index}>{text}{index !== hero.ctaText_Subtitle.length - 1 ? ' | ' : ''}</span>
            ))}
          </h2>
          <button className="mt-10 px-4 py-2 bg-lime-300 text-gray-500  hover:text-lime-300 hover:bg-gray-500 transition-all duration-700 rounded-lg text-xl">{hero.ctaBtnTxt}</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
