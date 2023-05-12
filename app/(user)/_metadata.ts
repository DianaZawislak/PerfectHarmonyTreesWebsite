// pages/_metadata.ts
import { Metadata, ResolvingMetadata } from "next";
import { client } from "../../lib/sanity.client";
import urlFor from "../../lib/urlFor";
import { groq } from "next-sanity";
type Props = {
    params: {
      slug: string;
    };
  };
  export type SEO = {
    title: string;
    description: string;
    keywords: string;
    openGraph: {
      type: string;
      url: string;
      ogSiteName: string;
      images: Array<{
        url: typeof urlFor;
        alt: string;
      }>;
    };
    twitter: {
      card: string;
    };
  };

  export default function createMetadata(seo: any): Metadata {
    const imageUrl = seo?.image ? urlFor(seo.image).url() : undefined;
  
    return {
      title: seo?.title || 'Default Title',
      description: seo?.description || 'Default Description',
      keywords: seo?.keywords || 'default,keywords',
      openGraph: {
        type: seo?.ogType || 'website',
        url: seo?.ogUrl || 'https://www.example.com',
        siteName: seo?.ogSiteName || 'Default Site Name',
        images: [
          {
            url: imageUrl || 'https://www.example.com/default-image.jpg',
            alt: seo?.title || 'Default Image Alt',
          },
        ],
      },
      twitter: {
        card: seo?.twitterCard || 'summary_large_image',
      },
    };
  }
  
  
