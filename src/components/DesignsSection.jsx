import { useState } from "react";

const designs = {
  templates: [
    {
      id: 1,
      title: "Business Card Template",
      img: "/designs/business-card-thumb.jpg",
      pdf: "/designs/business-card.pdf",
    },
    {
      id: 2,
      title: "Poster Template",
      img: "/designs/poster-thumb.jpg",
      pdf: "/designs/poster.pdf",
    },
  ],
  customer: [
    {
      id: 3,
      title: "Custom Flyer (Watermarked)",
      img: "/designs/custom-flyer-watermarked.jpg",
    },
    {
      id: 4,
      title: "Custom Banner (Watermarked)",
      img: "/designs/custom-banner-watermarked.jpg",
    },
  ],
};


export const DesignsSection = () => {
 const [selected, setSelected] = useState(null);

  return (
    <section id="designs" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Designs</h2>

        {/* Templates Section */}
        <h3 className="text-xl font-semibold mb-4">Templates</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {designs.templates.map((design) => (
            <div
              key={design.id}
              className="relative group cursor-pointer"
              onClick={() => setSelected(design)}
            >
              <img
                src={design.img}
                alt={design.title}
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-white font-medium">{design.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Section */}
        <h3 className="text-xl font-semibold mb-4">Customer Work (Watermarked)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {designs.customer.map((design) => (
            <div
              key={design.id}
              className="relative group cursor-pointer"
              onClick={() => setSelected(design)}
            >
              <img
                src={design.img}
                alt={design.title}
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-white font-medium">{design.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-3xl w-full p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 dark:text-gray-300"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
            <img
              src={selected.img}
              alt={selected.title}
              className="w-full rounded-md mb-4"
            />
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold">{selected.title}</h4>
              {selected.pdf && (
                <a
                  href={selected.pdf}
                  download
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                  Download PDF
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
