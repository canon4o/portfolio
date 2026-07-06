import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "./_components/NavBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Plamen Georgiev",
    template: "%s · Plamen Georgiev",
  },
  description: "Developer portfolio — devgeorgiev.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900">
        <NavBar />
        <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
