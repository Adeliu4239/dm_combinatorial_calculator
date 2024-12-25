import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./provider.jsx";

import { Link } from "@nextui-org/link";

import NavBar from "@/components/navBar";
import FootBar from "@/components/footBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Combinatorial Calculator",
  description: "A simple combinatorial calculator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <div className="bg-gray-50 h-full">
            <NavBar />
            <hr className="border-t border-gray-200" />
            <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
              {children}
            </main>
            <hr className="border-t border-gray-200" />
            <FootBar />
          </div>
        </Provider>
      </body>
    </html>
  );
}
