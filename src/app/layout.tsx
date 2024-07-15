import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "myngram social media app",
  description: "Social media app built for fashion influencers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="w-full bg-red-100 px-4 md:px-2 lg:px-2 xl:px-16 xl:px-32 h-full">
            <Navbar />
          </div>
          <div className=" bg-white">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}