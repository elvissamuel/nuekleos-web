import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ReactQueryProvider from "./react-query-context";
import { Plus_Jakarta_Sans } from "next/font/google";
import ConditionalLayout from "@/components/ConditionalLayout";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Neukleos",
  description: "We enable African Markets to thrive at home and on the global stage",
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
          <ConditionalLayout>{children}</ConditionalLayout>
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
