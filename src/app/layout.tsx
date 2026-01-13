import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prudhvi's Portfolio",
  description: "A minimalist digital garden.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
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
