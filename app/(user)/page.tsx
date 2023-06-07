
'use client'
import { PreviewData } from "next";
import PreviewSuspense from "../../components/PreviewSuspense";
import BlogList from "../../components/BlogList";
import PreviewBlogList from "../../components/PreviewBlogList";
import { client } from "../../lib/sanity.client";
import { groq } from "next-sanity";
import React from "react";
import createMetadata from "./_metadata";
import { queryAllPost, querySEO, queryHero ,  queryHeroArrayBySlug} from "../../lib/queries";
import Banner from "../../components/Banner";
import Banner2 from "../../components/Banner2";
import HorizontalCard from "../../components/HcardsIndex";
import IndexCards from "../../components/IndexCards";
import HcardsIndex from "../../components/HcardsIndex";
import AboutUs from "../../components/aboutus";
import Services from "../../components/Services";
async function generateMetadata() {
  const slug = "homepage";

  const heroSlug = "Trees-and-Gardens";
  const postData = await client.fetch(querySEO, { slug: slug });

  const metadata = createMetadata(postData);

  return metadata;
}

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
  const posts = await client.fetch(queryAllPost);
  const hero = await client.fetch(queryHero, { slug: heroSlug });
  const cards= await client.fetch(queryHeroArrayBySlug, { slug: arrSlug });


  return (
    <>
      <div className="relative">
        <Banner hero={hero} />
        <div className="absolute bottom-0 w-full">
          <IndexCards heroCards={cards} />
        </div>
      </div>
      <Banner2 />
      <Services content={cards}/>
      <AboutUs  content={cards}/>
 

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
