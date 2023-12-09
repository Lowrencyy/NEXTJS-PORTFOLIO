import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Projects from "@/components/main/Projects";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mark Laurence Tomenio",
  description: "My Portfolio Profile",
  
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
      </head>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Projects />
        <Footer />
        //eslint-disable-next-line
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

        //eslint-disable-next-line
        <script>
        AOS.init();
        </script>

      </body>
    </html>
  );
}