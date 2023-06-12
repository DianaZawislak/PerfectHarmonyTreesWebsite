"use client";
import { client } from "../../lib/sanity.client";

import createMetadata from "./_metadata";
import {
  querySEO,
  queryHero,
  queryHeroArrayBySlug,
  queryPageContent,
} from "../../lib/queries";
import Banner from "../../components/Banner";
import Banner2 from "../../components/Banner2";
import IndexCards from "../../components/IndexCards";

import AboutUs from "../../components/aboutus";
import Services from "../../components/Services";
import { QueryParams } from "sanity";
import { useEffect, useState } from "react";
import { Content } from "@radix-ui/react-dropdown-menu";
import PageContent from "../../components/content";

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
  const arrSlug = "index-cards";
  const contentSlug = "main-content";
  const [hero, setHero] = useState<Hero | null>(null);
  const [cards, setCards] = useState<HeroCardArray | null>(null);
  const [serviceContent, setServiceContent] = useState<contentList | null>(
    null
  );
  useEffect(() => {
    async function fetchData() {
      const pageContent: PageContent = await queryClient(queryPageContent, {
        slug: contentSlug,
      });
      const fetchedHero: Hero = pageContent?.hero;
      const fetchedCards: HeroCardArray =
        pageContent.mainContent[0].contentList[0];
      const fetchedContent: contentList = pageContent.mainContent[1];
      setHero(fetchedHero);
      setCards(fetchedCards);
      setServiceContent(fetchedContent);
    }

    fetchData();
  }, [heroSlug, arrSlug, contentSlug]);

  return (
    <>
      <div className="relative">
        {hero && <Banner hero={hero} />}
        <div className="absolute bottom-0 w-full">
          {cards && <IndexCards heroCards={cards} />}
        </div>
      </div>
      {/* <Banner2 />*/}
      {serviceContent && <PageContent content={serviceContent} />}
      {/*cards && <Services content={cards} />*/}
      <AboutUs />

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
