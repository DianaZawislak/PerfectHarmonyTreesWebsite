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

console.log(Object.keys(pageContent.mainContent[1].contentList[1].cards[2]));
  return (
    <div className="relative">
      <MainPage content={pageContent} />
    </div>
  );
}
