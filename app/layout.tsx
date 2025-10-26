import type { Metadata } from "next";
import { pixeled, heinzHeinrich, dungeonMode, satoshi } from "./fonts";
import "./globals.css";

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
      <body
        className={`${pixeled.variable} ${heinzHeinrich.variable} ${dungeonMode.variable} ${satoshi.variable}`}
      >
        {children}
      </body>
    </html>
  );
}