import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ro-calculator",
  description: "Generated by ro-calculator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
