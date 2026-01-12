import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alana Goyal Inspired Portfolio",
  description: "A minimalist digital garden.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ display: 'flex' }}>
          {/* Sidebar is client component, safe to import as it doesn't need data fetching yet */}
          <Sidebar />
          <MainContent>
            {children}
          </MainContent>
        </div>
      </body>
    </html>
  );
}
