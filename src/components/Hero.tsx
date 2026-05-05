import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-navy text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-navy opacity-90" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Gulf Coast Alloys
            <span className="block text-steel-light mt-2 text-2xl sm:text-3xl lg:text-4xl font-medium">
              Strength in Every Alloy
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl">
            Supplying high-quality metals and alloys for oil &amp; gas,
            petrochemical, construction, and manufacturing — with a focus on
            quality and delivery.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-steel px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-steel-light transition-colors"
            >
              Get a Quote
            </Link>
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Our Capabilities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
