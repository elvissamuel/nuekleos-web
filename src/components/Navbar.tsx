"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full relative top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo image */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/logo-icon.png" 
            alt="Nuekleos logo"       
            width={240}                 
            height={55}
            priority
            className="object-contain w-auto h-10 md:h-12"
          />
        </Link>

        
        <div className="flex-1" />

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-12 text-gray-900 ">
          <Link href="/about" className="hover:text-gray-700 transition">
            About us
          </Link>
          <Link href="/services" className="hover:text-gray-700 transition">
            Services
          </Link>
          <Link href="/work" className="hover:text-gray-700 transition">
            Our Work
          </Link>
          <Link href="/blogs" onClick={() => setOpen(false)}>
            Blogs
          </Link>
          <Link href="/contact" className="hover:text-gray-700 transition">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-900 focus:outline-none ml-4"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 flex flex-col items-center gap-6 py-6 md:hidden">
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
          </div>
        )}
      </nav>
    </header>
  );
}