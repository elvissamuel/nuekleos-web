"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Routes where Navbar and Footer should NOT appear
  const hideNavbarFooterRoutes = [
    "/login",
    "/admin",
    "/blog",
    "/users",
  ];

  // Check if current path starts with any of the hide routes
  const shouldHideNavbarFooter = hideNavbarFooterRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return (
    <>
      {!shouldHideNavbarFooter && <Navbar />}
      <main>{children}</main>
      {!shouldHideNavbarFooter && <Footer />}
    </>
  );
}

