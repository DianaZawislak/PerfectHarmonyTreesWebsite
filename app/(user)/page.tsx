`use-client`
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

import PageContent from "../../components/content";
import Header from "../../components/ScrollHeader";

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

export default async function IndexPage() {
  const contentSlug = "main-content";
  const pageContent: PageContent = await queryClient(queryPageContent, {
    slug: contentSlug,
  });
  const hero: Hero = pageContent?.hero;
  const cards: contentList = pageContent?.mainContent[0];
  const serviceContent: contentList = pageContent?.mainContent[1];
  const About: contentList = pageContent?.mainContent[2];


  return (
    <>
      <div className="relative">
        {hero && <Banner hero={hero} />}
        <div className="absolute bottom-0 w-full">
          {cards && <IndexCards content={cards} />}
        </div>
      </div>
      {/* <Banner2 />*/}
      {serviceContent && <PageContent content={serviceContent} />}
      {/*cards && <Services content={cards} />*/}
      {About && <AboutUs content={About} />}

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
