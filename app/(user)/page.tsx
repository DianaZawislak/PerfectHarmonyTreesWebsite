import { previewData } from "next/headers";
import PreviewSuspense from "../../components/PreviewSuspense";
import BlogList from "../../components/BlogList";
import PreviewBlogList from "../../components/PreviewBlogList";
import { client } from "../../lib/sanity.client";
import { groq } from "next-sanity";
import React from 'react';
import createMetadata from "./_metadata";

export async function generateMetadata() {
  const slug="homepage"
  const querySEO = groq`*[_type=='seo' && slug.current == $slug][0]
    {
    
        title,
        description,
        keywords,
        image,
        ogType,
        twitterCard,
        ogUrl,
        ogSiteName,
        metaRobots
      
    }`;

  const postData: { seo:any } = await client.fetch(querySEO, { slug: slug });

  const metadata = createMetadata(postData);

  return metadata;
}




const query = groq`*[_type=='post'] {
  ...,
  author->,
  categories[]->,
  seo-> {
    title,
    description,
    keywords,
    image,
    ogType,
    twitterCard,
    ogUrl,
    ogSiteName,
    metaRobots
  }
} | order(_createdAt desc)
`;
const slug="home"
const queryMenu = groq`*[_type=='menu' && slug.current == $slug][0]
{
  title,
  slug,
  "logoUrl": logo.asset->url,
  items[] {
    title,
    link,
    submenu[] {
      title,
      link
    }
  }
}`;

export default async function IndexPage() {
  if (previewData()) {
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

  const posts = await client.fetch(query);
  const menu: { menu:any } = await client.fetch(queryMenu, { slug: slug });
 

  return <BlogList posts={posts} />;
}
