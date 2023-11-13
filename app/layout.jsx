"use client"
import MainNavigation from "@/components/MainNavigation";
import "../styles/globals.css";
import MainFooter from "@/components/MainFooter";
import MobileMenu from "@/components/MobileMenu";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Head from "next/head";

export const metadata = {
  icons: {
    icon: "/icon.svg",
  },
};

export default function Layout({ children }) {
  const path = usePathname()
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <html dir="rtl" lang="fa-IR">
      <head>
        <link rel="icon" type="image/x-icon" href="/icon.svg" />
        <title>آکادمی آموزش هشت</title>
      </head>
      <body className="overflow-x-hidden font-Dana">
        {domLoaded && <><MainNavigation />
          {children}
          <MainFooter />
          <MobileMenu /></>}
      </body>
    </html>
  );
}
