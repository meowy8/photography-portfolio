import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import SiteTitle from "./components/SiteTitle";
import SiteHeader from "./components/SiteHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Micheal Hoey",
  description: "Micheal Hoey - Photography Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " lg:flex min-h-screen"}>
        <SiteHeader />
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <div className="w-full lg:ml-64">{children}</div>
      </body>
    </html>
  );
}
