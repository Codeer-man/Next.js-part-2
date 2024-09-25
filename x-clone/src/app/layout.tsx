import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Slidebar from "@/components/Slidebar";
import News from "@/components/News";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "X clone",
  description: "A X clone made with NEXT.JS and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex justify-between max-w-7xl mx-auto">
          <div className="border-r h-screen hidden sm:inline">
            <Slidebar />
          </div>
          <div>
            {children}
          </div>
          <div className="lg:flex-col p-3 h-screen border-l lg:flex w-[24rem]" >
            <div className="sticky top-0 bg-white py-2">
              <input type="text" placeholder="Search...." className="bg-gray-100 border border-gray-200 rounded-3xl text-sm w-full px-4 py-2 " />
            </div>
            <News />
          </div>
        </div>
      </body>
    </html>
  );
}
