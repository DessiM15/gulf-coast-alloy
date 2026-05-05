import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Gulf Coast Alloys, LLC",
  description:
    "Get in touch with Gulf Coast Alloys for a quote or to learn more about our metals and alloy products.",
};

export default function ContactPage() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-navy">
            Contact Us
          </h1>
          <div className="mt-2 h-1 w-16 bg-steel mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Ready to discuss your next project? Reach out and our team will get
            back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-navy mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 bg-navy/5 rounded-lg text-navy">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy">Email</h3>
              </div>
              <a
                href="mailto:stacy@gulfcoastalloys.net"
                className="text-sm text-steel hover:text-steel-light transition-colors"
              >
                stacy@gulfcoastalloys.net
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 bg-navy/5 rounded-lg text-navy">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy">Phone</h3>
              </div>
              <a
                href="tel:832-259-9102"
                className="text-sm text-steel hover:text-steel-light transition-colors"
              >
                832-259-9102
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 bg-navy/5 rounded-lg text-navy">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy">Location</h3>
              </div>
              <p className="text-sm text-gray-600">Houston, TX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
