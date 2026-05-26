import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "N7 Digital Banking",
  description: "A premium SaaS frontend for modern banking platforms."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
