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
  ctaBtnTxt,
  "logoUrl": logo.asset->url,
  backgroundImage,
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
export const queryHeroArrayBySlug = groq`*[_type == 'heroCardArray' && slug.current == $slug][0] {
  title,
  slug,
  cards[] {
    title,
    backgroundImage,
    cardText,ModalText,
    ctaBtnTxt
  }
}`;

export const queryPageContent = groq`*[_type == 'page' && slug.current == $slug][0] {
  title,
  slug,
  hero-> {
    title,
    slug,
    CTA_Main,
    ctaBtnTxt,
    "logoUrl": logo.asset->url,
    backgroundImage,
    ctaText_Subtitle
  }
  ,
  Menulogo
  ,
  MenuBackground,
  "mainContent": MainContent[]-> {
    title,
    slug,
    "contentList": content[]-> {
      title,
      slug,
      header,
      SectionDescription,
      cards[] {
        title,
        backgroundImage,
        ModalText,
        logo,
        cardText,
        ctaBtnTxt
      }
    }
  },ImageGallery->{  title,
    slug,
    ImageArray[] {
      asset->
      {
        ...
      }
    }},
  "portableTextContent": PortableTextArray[]-> {
    title,
 
    mainText,
    backgroundImage,
    logo,
    ctaBtnTxt
  }
}`;

export const queryFooterV2 = groq`*[_type == 'FooterV2' && slug.current == $slug][0] {
  title,
  slug,
  Address {
    StreetAddress,
    City,
    State,
    Zipcode
  },
  CompanyName,
  PhoneNumber,
  "backgroundImageUrl": backgroundImage.asset->url,
  Email,
  "logoUrl": logo.asset->url
}`;
export const queryImageGalleryBySlug = groq`*[_type == 'ImageGallery' && slug.current == $slug][0] {
  title,
  slug,
  ImageArray[] {
    asset->
    {
      ...
    }
  }
}`;