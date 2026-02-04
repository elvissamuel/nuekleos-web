"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 relative">
        {/* Dark Logo */}
        <div className="px-6 md:px-12">
          <Link href="/" className="flex items-center">
            <div className="relative w-48 h-12 md:w-48 md:h-12">
              <Image
                src="/logo-icon.png"
                alt="Nuekleos logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>
        </div>

        <div className="flex-1" />

        {/* Desktop Nav - Black Text */}
        <div className="hidden md:flex items-center gap-12 text-black pr-6 md:pr-12">
          <Link href="/about" className="hover:opacity-80 transition">
            About us
          </Link>
          <Link href="/services" className="hover:opacity-80 transition">
            Services
          </Link>
          <Link href="/work" className="hover:opacity-80 transition">
            Our Work
          </Link>
          <Link href="/blogs" className="hover:opacity-80 transition">
            Blogs
          </Link>
          <Link href="/contact" className="hover:opacity-80 transition">
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle - Black */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black focus:outline-none mr-6 z-50"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Floating Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="
                absolute top-full right-4 mt-4
                w-64 md:hidden
                rounded-2xl
                bg-gray-200/70 backdrop-blur-xl
                shadow-xl
                border border-white/30
                flex flex-col gap-5
                px-6 py-6
                text-gray-900
              "
            >
              <Link href="/about" onClick={() => setOpen(false)}>
                About us
              </Link>
              <Link href="/services" onClick={() => setOpen(false)}>
                Services
              </Link>
              <Link href="/work" onClick={() => setOpen(false)}>
                Our Work
              </Link>
              <Link href="/blogs" onClick={() => setOpen(false)}>
                Blogs
              </Link>
              <Link href="/contact" onClick={() => setOpen(false)}>
                Contact Us
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}