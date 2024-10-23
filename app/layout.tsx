import "./globals.css";
import Script from "next/script";
import {Inter} from "next/font/google";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Charton dev build</title>
      </head>
      <body className={inter.className}>
        <div className="h-screen flex flex-col">
          <Header/>
          <main className="h-full rounded-[45px] overflow-y-auto shadow-inner bg-[#ededed]">
            {children}
          </main>
          <Sidebar/>
        </div>
        <Script src="https://cdn.jsdelivr.net/npm/tailwindcss-jit-cdn" strategy="beforeInteractive"></Script>
      </body>
    </html>
  );
}
