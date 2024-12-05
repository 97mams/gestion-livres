import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/src/components/header";
import { SideBar } from "@/src/components/sideBar";
import { prisma } from "@/src/lib/prisma";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const genres = await prisma.books.findMany({
    select: {
      types: true
    }
  })

  const arrayGenres = Array.from(genres, (g) => g.types)

  const data = [...new Set(arrayGenres)]

  console.log(data);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-800`}
      >
        <div className="w-full max-h-screen">
          <Header />
          <div className="w-full px-20 flex items-start">
            <SideBar items={data} />
            <div className="flex h-full w-full justify-center">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
