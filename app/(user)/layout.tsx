import Banner from "../../components/Banner";
import Header from "../../components/Header";
import "../../styles/globals.css";
import React from 'react';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="max-w-7xl mx-auto">
        <Header />
       hello 
        <Banner />
        {children}
      </body>
    </html>
  );
}
