
import type { Metadata } from "next";

import "./globals.css";
import Provider from "@/provider";


export const metadata: Metadata = {
  title: "GrowCart | 7 minutes Grocery Delivery App.",
  description: "7 minutes Grocery Delivery App.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen bg-linear-to-b from-green-100 to-white">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
