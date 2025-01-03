import type { Metadata } from "next";
import localFont from "next/font/local";
import { Bebas_Neue, Open_Sans } from 'next/font/google';
import "./globals.css";

const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'], variable: '--font-bebas' });
const open = Open_Sans({ subsets: ['latin'], weight: ['300','400','600','700'], variable: '--font-open' });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${open.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
