const partnerCategories = [
  {
    title: "Pipe Mills",
    partners: [
      "HYUNDAI (S. Korea) — CS Saw",
      "DONG YANG (S. Korea) — CS Saw",
      "DAI DUCK (S. Korea) — CS Saw",
      "SEAH (S. Korea) — CS/SS Welded",
      "VinLong (Vietnam) — SS & Alloys",
    ],
  },
  {
    title: "BW Fittings",
    partners: [
      "Vintech (Vietnam) — SS / Alloy",
      "TK, DK, JIN IL, YS (S. Korea) — SS",
      "PFC, SBC, JOUN, KYEONG NAM (S. Korea) — CS",
      "WSM (S. Korea) — CS / SS",
    ],
  },
  {
    title: "Forged Fittings",
    partners: [
      "SAM OH, KEONSAE (S. Korea) — High Pressure SSF, All Grades",
    ],
  },
  {
    title: "Flanges",
    partners: [
      "LS, HDFCO, DAE HEUNG, SHIN WOO, PILLAR (S. Korea) — All Grades",
      "TAE IL, KUM OH, JAIL, CHANG SHIN (S. Korea) — All Grades",
      "BM MEtal (S. Korea) — CuNi Flanges",
    ],
  },
  {
    title: "Specialty",
    partners: ["HAE WON (S. Korea) — CuNi Fittings"],
  },
];

export default function MillPartners() {
  return (
    <section id="partners" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Mill Partners
          </h2>
          <div className="mt-2 h-1 w-16 bg-steel mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Direct relationships with leading manufacturers across South Korea
            and Vietnam
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-navy flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-steel rounded-full" />
                {category.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {category.partners.map((partner, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-600 leading-relaxed pl-4 border-l-2 border-gray-200"
                  >
                    {partner}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
