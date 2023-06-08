
'use client'
import { client } from "../../lib/sanity.client";


import createMetadata from "./_metadata";
import {  querySEO, queryHero ,  queryHeroArrayBySlug} from "../../lib/queries";
import Banner from "../../components/Banner";
import Banner2 from "../../components/Banner2";


import AboutUs from "../../components/aboutus";
import Services from "../../components/Services";
import { QueryParams } from "sanity";

export async function generateMetadata() {
  const slug = "homepage";


  const postData:SEO = await queryClient(querySEO, { slug: slug });
  const metadata = createMetadata(postData);

  return metadata;
}





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
  /*  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#f70a0acf]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }
*/
  const heroSlug = "Trees-and-Gardens";
  const arrSlug="index-cards";

  const hero:Hero = await queryClient(queryHero, { slug: heroSlug });
  const cards:HeroCardArray = await queryClient(queryHeroArrayBySlug, { slug: arrSlug });


  return (
    <>
      <div className="relative">
     {   hero && <Banner hero={hero} />}
        <div className="absolute bottom-0 w-full">
        { /*  hero&&     <IndexCards heroCards={cards} />*/}
        </div>
      </div>
      <Banner2 />
      {  hero&&   <Services content={cards}/>}
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
