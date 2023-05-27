import { PreviewData } from "next";
import PreviewSuspense from "../../components/PreviewSuspense";
import BlogList from "../../components/BlogList";
import PreviewBlogList from "../../components/PreviewBlogList";
import { client } from "../../lib/sanity.client";
import { groq } from "next-sanity";
import React from "react";
import createMetadata from "./_metadata";
import { queryAllPost, querySEO, queryHero } from "../../lib/queries";
import Banner from "../../components/Banner";
import Banner2 from "../../components/Banner2";
import HorizontalCard from "../../components/HcardsIndex";
import IndexCards from "../../components/IndexCards";
import HcardsIndex from "../../components/HcardsIndex";

export async function generateMetadata() {
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
  const heroSlug = "heromain";
  const posts = await client.fetch(queryAllPost);
  const hero = await client.fetch(queryHero, { slug: heroSlug });
  console.log(hero.backgroundImage);

  return (
    <>
      <Banner hero={hero} />
      <Banner2 />
      <IndexCards />
      <HcardsIndex />
    </>
  );
}
