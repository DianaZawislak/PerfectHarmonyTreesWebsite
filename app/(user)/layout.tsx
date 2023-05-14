
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import "../../styles/globals.css";
import { client } from "../../lib/sanity.client";
import { groq } from "next-sanity";
import React, { useEffect, useState } from "react";
interface RootLayoutProps {
  children: React.ReactNode;
  menu: any; // Adjust the type of 'menu' accordingly
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {


  const queryMenu = groq`*[_type=='menu' && slug.current == $slug][0]
{
  title,
  slug,
  "logoUrl": logo.asset->url,
  items[] {
    title,
    link,
    submenu[] {
      title,
      link
    }
  }
}`;
const slug="home"
const menu: { menu:any } = await client.fetch(queryMenu, { slug: slug });
console.log(menu,"layout page");
 

  return (
    <html>
      <body>
        <Header menu={menu} />
        <Banner />
        {children}
      </body>
    </html>
  );
}


