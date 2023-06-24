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
import PageContent from "../../components/content";
import Header from "../../components/Navbar";
import Gallery from '../../components/Gallery';

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
  const contentSlug = "main-content";
  const [hero, setHero] = useState<Hero | null>(null);
  const [cards, setCards] = useState<contentList | null>(null);
  const [serviceContent, setServiceContent] = useState<contentList | null>(
    null
  );
  const [About, setAbout] = useState<contentList | null>(null);
  useEffect(() => {
    async function fetchData() {
      const pageContent: PageContent = await queryClient(queryPageContent, {
        slug: contentSlug,
      });
      const Fetchedhero: Hero = pageContent?.hero;
      const Fetchedcards: contentList = pageContent?.mainContent[0];
      const FetchserviceContent: contentList = pageContent?.mainContent[1];
      const FetchedAbout: contentList = pageContent?.mainContent[2];
      setHero(Fetchedhero);
      setCards(Fetchedcards);
      setServiceContent(FetchserviceContent);
      setAbout(FetchedAbout);
    }

    fetchData();
  }, [contentSlug]);

  return (
    <>
      <div className="relative">
      {hero && <Banner hero={hero} />}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-11">
        {cards && <IndexCards content={cards} />}
      </div>
    </div>
      {/* <Banner2 />*/}
      {serviceContent && <PageContent content={serviceContent} />}
      {/*cards && <Services content={cards} />*/}
      {About && <AboutUs content={About} />}
      {<Gallery />}

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
