import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const bathala = localFont({
  src: '../public/fonts/Pixeled English Font.otf',
  variable: '--font-bathala'
})
const heinzHeinrich = localFont({
  src: '../public/fonts/HeinzHeinrich-Regular.otf',
  variable: '--font-heinz-heinrich'
})
const dungeonMode = localFont({
  src: '../public/fonts/dungeon-mode.ttf',
  variable: '--font-dungeon-mode'
})
const satoshi = localFont({
  src: '../public/fonts/Satoshi-Regular.otf',
  variable: '--font-satoshi'
})

export const metadata: Metadata = {
  title: "Bathala",
  description: "Promotional website for the indie game Bathala",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bathala.variable} ${heinzHeinrich.variable} ${dungeonMode.variable} ${satoshi.variable}`}>
        {children}
      </body>
    </html>
  );
}