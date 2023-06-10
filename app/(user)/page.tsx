
'use client'
import { client } from "../../lib/sanity.client";


import createMetadata from "./_metadata";
import {  querySEO, queryHero ,  queryHeroArrayBySlug} from "../../lib/queries";
import Banner from "../../components/Banner";
import Banner2 from "../../components/Banner2";


import AboutUs from "../../components/aboutus";
import Services from "../../components/Services";
import { QueryParams } from "sanity";
import { useEffect, useState } from "react";






function makeQueryClient() {
  const fetchMap = new Map<string, Promise<any>>();
  return function queryClient<QueryResult>(
    queryName: string,
    params: QueryParams
  ): Promise<QueryResult> {
    const queryString = JSON.stringify(params);
    const mapKey = `${queryName}_${queryString}`;

    if (!fetchMap.has(mapKey)) {
      const queryFunction = () => client.fetch(queryName, params);
      fetchMap.set(mapKey, queryFunction());
    }

    return fetchMap.get(mapKey)!;
  };
}

const queryClient = makeQueryClient();


export default function IndexPage() {
  const heroSlug = "Trees-and-Gardens";
  const arrSlug="index-cards";

  const [hero, setHero] = useState<Hero | null>(null);
  const [cards, setCards] = useState<HeroCardArray | null>(null);

  useEffect(() => {
    async function fetchData() {
      const fetchedHero:Hero = await queryClient(queryHero, { slug: heroSlug });
      const fetchedCards:HeroCardArray = await queryClient(queryHeroArrayBySlug, { slug: arrSlug });
      setHero(fetchedHero);
      setCards(fetchedCards);
    }
    
    fetchData();
  }, [heroSlug, arrSlug]);


  return (
    <>
      <div className="relative">
     {   hero && <Banner hero={hero} />}
        <div className="absolute bottom-0 w-full">
        { /*  hero&&     <IndexCards heroCards={cards} />*/}
        </div>
      </div>
      <Banner2 />
      {  cards &&   <Services content={cards}/>}
      <AboutUs  />
 

      {/* <HcardsIndex /> */}

      <style jsx>{`
        @media (max-width: 768px) {
          .relative {
            display: flex;
            flex-direction: column;
          }
  
          .absolute {
            position: static;
          }
        }
      `}</style>
    </>
  );
  
  
}
