import { client } from "../../lib/sanity.client";

import createMetadata from "./_metadata";
import {
  querySEO,
  queryHero,
  queryHeroArrayBySlug,
  queryPageContent,
} from "../../lib/queries";

import handleError from "../../lib/utils";
import MainPage from "../../components/pageContent";



export default async function IndexPage() {
  const contentSlug = "main-content";

  const fetchedData = await Promise.allSettled([
    client.fetch(queryPageContent, { slug: contentSlug }),
  ]);
  const [pageContent] = handleError(fetchedData)[0];
  console.log(Object.keys(pageContent.portableTextContent[0]), "testing schema additions");

  return (
    <div className="relative">
      <MainPage content={pageContent} />
    </div>
  );
}
