import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
  
export const metadata: Metadata = {
  title: "PagePal",
  description: "PagePal is an AI-powered assistant that enhances your web experience by providing intelligent insights, seamless communication, and instant access to relevant information. Stay organized, productive, and connected with PagePal. Try it now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`)}
      >
        <Providers>
        <main className="h-screen dark text-foreground bg-background">
          {children}
          </main>
          </Providers> 
      </body>
    </html>
  );
}
