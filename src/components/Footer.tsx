import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-3">Gulf Coast Alloys, LLC</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Supplying high-quality metals and alloys for oil &amp; gas,
              petrochemical, construction, and manufacturing industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-steel-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-steel-light transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#capabilities" className="hover:text-steel-light transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-steel-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-steel-light flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:stacy@gulfcoastalloys.net" className="hover:text-steel-light transition-colors">
                  stacy@gulfcoastalloys.net
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-steel-light flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:832-259-9102" className="hover:text-steel-light transition-colors">
                  832-259-9102
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-steel-light flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Houston, TX
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Gulf Coast Alloys, LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
