import { groq } from "next-sanity";

export const queryMenu = groq`*[_type=='menu' && slug.current == $slug][0]
{
  title,
  slug,
  "logoUrl": logo.asset->url,
  items[] {
    title,
    link,
  }
}`;

export const queryFooter = groq`*[_type=='footer' && slug.current == $slug][0]
{
  websiteTitle,
  title,
  slug,
  "logoUrl": logo.asset->url,
  sections[] {
    title,
    items[] {
      title,
      link,
    }
  }
}`;

export const queryHero = groq`*[_type=='hero' && slug.current == $slug][0]
{
  title,
  slug,
  CTA_Main,
  "logoUrl": logo.asset->url,
  "backgroundImageUrl": backgroundImage.asset->url,
  ctaText_Subtitle
}`;

export const queryAllPost = groq`*[_type=='post'] {
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
export const querySEO = groq`*[_type=='seo' && slug.current == $slug][0]
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
export const queryPost = groq`*[_type=='post' && slug.current == $slug][0]
{
  ...,
  author->,
  categories[]->,
  seo-> {
    title,
description,
keywords,
image,
openGraph {
  title,
  type,
  url,
  siteName
},
twitter {
  card,
  site,
  creator,
  image
},
metaRobots
  }
}`;
