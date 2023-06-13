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
import { queryMenu, queryPageContent,queryFooter, querySEO } from "../../lib/queries";
import Link from 'next/link';
import createMetadata from "./_metadata";




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
  const postData:SEO = await client.fetch(querySEO,{slug:slug});
  const metadata = createMetadata(postData);
  return metadata;
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const slug = "homepage";

  const menu = await client.fetch(queryMenu, { slug: slug });
  const footer = await client.fetch(queryFooter, { slug: slug });
  const contentSlug="main-content";
  const pageContent:PageContent= await client.fetch(queryPageContent,{slug:contentSlug});
  const Titles = pageContent.mainContent.map(content => content.title);

  return (
    <html>
      <body className="bg-white">
      <div className="mx-auto max-w-9xl">
        <PrivacyDraw/>
        {menu && <DynamicHeader menu={Titles} />} 
        {children}
        {footer && <DynamicFooter data={footer} />}
        </div>
      </body>
    
    </html>
  );
}
