import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/src/components/header";
import { Footer } from "@/src/components/footer";
import { SideBar } from "@/src/components/sideBar";
import { prisma } from "@/src/lib/prisma";
import { auth } from "@/src/lib/auth";
import { Toaster } from 'sonner';
import { EmpruntCurrent } from "@/src/components/empruntCurrent";

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
  title: "library",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()

  const genres = await prisma.books.findMany({
    select: {
      types: true
    }
  })

  const arrayGenres = Array.from(genres, (g) => g.types)

  const data = [...new Set(arrayGenres)]

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} `}>
        <div className="w-full h-screen max-h-screen overflow-hidden">
          <Header />
          <div className="w-full flex items-start pl-8">
            {session ? <SideBar items={data} /> : ''}
            <div className="flex h-screen w-full justify-center overflow-scroll">
              {children}
            </div>
            {session ? <EmpruntCurrent /> : ''}
          </div>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
