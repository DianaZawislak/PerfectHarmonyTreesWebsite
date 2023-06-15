import Header from "../../components/Header";
//import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import "./globals.css";
import { client } from "../../lib/sanity.client";
import { groq } from "next-sanity";
import React, { useEffect, useState } from "react";
import Banner2 from "../../components/Banner2";
import dynamic from "next/dynamic";
import { PreviewData } from "next";
import {
  queryMenu,
  queryPageContent,
  queryFooter,
  querySEO,
  queryFooterV2,
} from "../../lib/queries";
import Link from "next/link";
import createMetadata from "./_metadata";
import handleError from "../../lib/utils";

const DynamicHeader = dynamic(() => import("../../components/ScrollHeader"), {
  loading: () => <p>Loading...</p>,
});
const DynamicFooter = dynamic(() => import("../../components/Footer"), {
  loading: () => <p>Loading...</p>,
});

const PrivacyDraw = dynamic(() => import("../../components/PrivacyDraw"), {
  loading: () => <p>Loading...</p>,
});
export async function generateMetadata() {
  const slug = "homepage";
  const postData: SEO = await client.fetch(querySEO, { slug: slug });
  const metadata = createMetadata(postData);
  return metadata;
}





export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const slug = "homepage";

  //const footer = await client.fetch(queryFooter, { slug: slug });
 // const footer2 = await client.fetch(queryFooterV2, { slug: slug });

  const contentSlug = "main-content";
 /* const pageContent: PageContent = await client.fetch(queryPageContent, {
    slug: contentSlug,
  }); */
  const fetchedData = await Promise.allSettled([
    client.fetch(queryPageContent, { slug: contentSlug }),
    client.fetch(queryFooterV2, { slug: slug })
  ]);
  const[pageContent,footer]=handleError(fetchedData)[0];

  const Titles = pageContent.mainContent.map((content:contentList) => content.title);

 
  return (
    <html>
      <body className="bg-white">
        <div className="mx-auto max-w-9xl">
          <PrivacyDraw />
          {Titles && <DynamicHeader menu={Titles} />}
          {children}
          {footer && <DynamicFooter data={footer} />}
        </div>
      </body>
    </html>
  );
}
