import "./globals.css";
import {Inter} from "next/font/google";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import {twMerge} from "tailwind-merge";

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
      <body className={twMerge(inter.className, "h-full")}>
        <div className={"h-full flex flex-col gap-1 p-1"}>
            <Header/>
            {children}
        </div>
        <Sidebar/>
      </body>
    </html>
  );
}
