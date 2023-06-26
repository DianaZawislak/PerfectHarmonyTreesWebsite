import { client } from "../../lib/sanity.client";

import createMetadata from "./_metadata";
import {
  querySEO,
  queryHero,
  queryHeroArrayBySlug,
  queryPageContent, queryImageGalleryBySlug
} from "../../lib/queries";

import AboutUs from "../../components/aboutus";
import Services from "../../components/Services";
import { QueryParams } from "sanity";
import { useEffect, useState } from "react";
import PageContent from "../../components/content";
import Header from "../../components/Navbar";
import Gallery from '../../components/Gallery';
import MainPage from "../../components/pageContent";
import handleError from "../../lib/utils";



export default async function IndexPage() {
  const contentSlug = "main-content";

  const fetchedData = await Promise.allSettled([
    client.fetch(queryPageContent, { slug: contentSlug }),
  

  ]);
  const [pageContent] = handleError(fetchedData)[0];



  return (
    <div className="relative">
      <MainPage content={pageContent}  />
    </div>
  );
}
