

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
import { useEffect, useState } from "react";
import PageContent from "../../components/content";
import Header from "../../components/ScrollHeader";
import MainPage from "../../components/pageContent";
import handleError from "../../lib/utils";

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
async function fetchData(contentSlug:any,query:any,) {
  try {
    const fetchedData = await Promise.allSettled([
      await client.fetch(query, { slug: contentSlug }),
    ]);

    // Process the fetchedData here
    // ...

    return fetchedData;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    // Handle the error here, or re-throw it if needed
    // ...
  }
}
const queryClient = makeQueryClient();

export default  async function IndexPage() {
  const contentSlug = "main-content";

  const fetchedData = await Promise.allSettled([
    client.fetch(queryPageContent, { slug: contentSlug }),
  
  ]);
  const[pageContent]=handleError(fetchedData)[0];

  return (
    <>
   
      <MainPage content={pageContent}/>
   
    </>
  );
}
