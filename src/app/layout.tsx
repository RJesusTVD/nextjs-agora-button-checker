import "@ama-pt/agora-design-system/dist/index.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BackToHomeComponent } from "./back-home";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <BackToHomeComponent />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
