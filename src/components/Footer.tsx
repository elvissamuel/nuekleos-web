import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Column - Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">Contact</h2>

          {/* General Enquiries */}
          <div>
            <h3 className="text-base font-semibold mb-2">General Enquiries</h3>
            <Link 
              href="mailto:info@neukleos.com"
              className="text-sm text-gray-300 hover:text-white transition underline"
            >
              info@neukleos.com
            </Link>
          </div>

          {/* Recruitment */}
          <div>
            <h3 className="text-base font-semibold mb-2">Recruitment</h3>
            <Link 
              href="mailto:careers@neukleos.com"
              className="text-sm text-gray-300 hover:text-white transition underline"
            >
              careers@neukleos.com
            </Link>
          </div>

          {/* New Business */}
          <div>
            <h3 className="text-base font-semibold mb-2">New Business</h3>
            <Link 
              href="mailto:info@neukleos.com"
              className="text-sm text-gray-300 hover:text-white transition underline"
            >
              info@neukleos.com
            </Link>
          </div>
        </div>

        {/* Middle Column - Address & Phone */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-300 leading-relaxed">
              21, Oduduwa Street Off Sobo Arobiodu,<br />
              Ikeja GRA, Lagos Nigeria
            </p>
          </div>

          <div>
            <Link 
              href="tel:+2348033183741"
              className="text-lg font-semibold hover:text-gray-300 transition"
            >
              +234 803 318 3741
            </Link>
          </div>
        </div>

        {/* Right Column - Social & Links */}
        <div className="space-y-8">
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <Link 
              href="https://x.com/Neukleos_" 
              target="_blank"
              className="hover:text-gray-400 transition"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </Link>
            <Link 
              href="https://www.instagram.com/teamneukleos/" 
              target="_blank"
              className="hover:text-gray-400 transition"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </Link>
            <Link 
              href="https://www.linkedin.com/company/neukleos/" 
              target="_blank"
              className="hover:text-gray-400 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
          </div>

          {/* Footer Links */}
          <div className="space-y-3 text-sm">
            <div>
              <Link 
                href="/accessibility" 
                className="text-gray-300 hover:text-white transition"
              >
                Accessibility
              </Link>
            </div>
            <div>
              <Link 
                href="/cookie-preferences" 
                className="text-gray-300 hover:text-white transition"
              >
                Cookie Preferences
              </Link>
            </div>
            <div>
              <Link 
                href="/privacy" 
                className="text-gray-300 hover:text-white transition"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}