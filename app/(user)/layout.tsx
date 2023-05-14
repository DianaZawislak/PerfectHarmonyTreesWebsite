import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import "../../styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
  menu: any; // Adjust the type of 'menu' accordingly
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const menu = {
    items: [
      { _key: "1", link: "/home", title: "Home" },
      { _key: "2", link: "/about", title: "About" },
      // ... other menu items
    ],
  };

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