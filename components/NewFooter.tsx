import Link from "next/link";
import { config } from "../app/config";

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "How It Works", href: "#how-it-works" },
      { name: "Features", href: "#features" },
      { name: "Book a Demo", href: "https://calendly.com/aryanv0213/30min" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
    ],
  },
];

export default function NewFooter() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {/* Logo and tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img
                  src="/cxicon.png"
                  alt="CrowAI Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="font-bold text-lg text-gray-900">
                {config.company.name}
              </span>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              From inbox to investment model in minutes.
            </p>
          </div>

          {/* Footer links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} {config.company.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
