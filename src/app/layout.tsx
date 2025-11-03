import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ReactQueryProvider from "./react-query-context";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Neukleos",
  description:
    "We enable African Markets to thrive at home and on the global stage",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo-icon.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-icon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "Neukleos",
    description:
      "We enable African Markets to thrive at home and on the global stage",
    images: "/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plusJakarta.className}>
        <ReactQueryProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
