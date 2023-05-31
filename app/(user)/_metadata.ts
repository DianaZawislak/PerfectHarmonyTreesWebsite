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


  export default function createMetadata(seo: SEO): Metadata {
    const imageUrl = seo?.image ? urlFor(seo.image).url() : undefined;
  console.log(seo);
    return {
      title: seo?.title || 'Perfect Harmony Trees and Gardens, LLC',
      description: seo?.description || 'Default Description',
      keywords: seo?.keywords || 'default,keywords',
      openGraph: {
        title: seo?.openGraph?.title || seo?.title || 'Default Title',
        type: (seo?.openGraph?.type || 'website') as "article" | "website" | "book" | "profile" | "music.song" | "music.album" | "music.playlist" | "music.radio_station" | "video.movie" | "video.episode" | "video.tv_show" | "video.other",
        url: seo?.openGraph?.url || 'https://www.example.com',
        siteName: seo?.openGraph?.siteName || 'Default Site Name',
        images: [
          {
            url: imageUrl || 'https://www.example.com/default-image.jpg',
            alt: seo?.openGraph?.title || seo?.title || 'Default Image Alt',
          },
        ],
      },
      twitter: {
        card: (seo?.twitter?.card || 'summary_large_image') as 'summary' | 'summary_large_image' | 'app', // Make sure to define all possible values for 'card' here
        site: seo?.twitter?.site || '@default',
        creator: seo?.twitter?.creator || '@default',
      
      },
    };
  }