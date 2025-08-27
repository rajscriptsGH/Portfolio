import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--outfit-font",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--ovo-font",
});



export const metadata: Metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased bg-slate-800`}
      >
        {children}
      </body>
    </html>
  );
}
