import Header from "../../components/Header";
//import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import "../../styles/globals.css";
import { client } from "../../lib/sanity.client";
import { groq } from "next-sanity";
import React, { useEffect, useState } from "react";
import Banner2 from "../../components/Banner2";
import dynamic from "next/dynamic";
import { PreviewData } from "next";
import { queryMenu, queryFooter, queryHero } from "../../lib/queries";
import Link from 'next/link';




const DynamicHeader = dynamic(() => import("../../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const DynamicFooter = dynamic(() => import("../../components/Footer"), {
  loading: () => <p>Loading...</p>,
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const slug = "home";
  const heroSlug = "placeholder-hero";
  const menu = await client.fetch(queryMenu, { slug: slug });
  const footer = await client.fetch(queryFooter, { slug: slug });
  const hero = await client.fetch(queryHero, { slug: heroSlug });


  return (
    <html>
      <body>
      <div className="mx-auto max-w-7xl">
        {menu && <DynamicHeader menu={menu} />} 
        {children}
        {footer && <DynamicFooter data={footer} />}
        </div>
      </body>
    
    </html>
  );
}
