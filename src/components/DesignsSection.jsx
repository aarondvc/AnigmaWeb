import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section
      id="designs"
      className="relative py-24 text-center text-foreground"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 drop-shadow-[0_0_15px_rgba(120,120,255,0.3)]"
        >
          Designs
        </motion.h2>

        {/* Templates Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-primary">
            Templates
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {designs.templates.map((design) => (
              <motion.div
                key={design.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative rounded-2xl overflow-hidden cursor-pointer backdrop-blur-md bg-white/10 dark:bg-black/30 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(150,150,255,0.2)]"
                onClick={() => setSelected(design)}
              >
                <img
                  src={design.img}
                  alt={design.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition-all duration-300">
                  <p className="text-white font-semibold text-lg">
                    {design.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Customer Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-primary">
            Customer Work (Watermarked)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {designs.customer.map((design) => (
              <motion.div
                key={design.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative rounded-2xl overflow-hidden cursor-pointer backdrop-blur-md bg-white/10 dark:bg-black/30 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,150,255,0.2)]"
                onClick={() => setSelected(design)}
              >
                <img
                  src={design.img}
                  alt={design.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition-all duration-300">
                  <p className="text-white font-semibold text-lg">
                    {design.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white/10 dark:bg-black/50 border border-white/20 rounded-2xl p-6 max-w-3xl w-[90%] shadow-[0_0_25px_rgba(255,255,255,0.1)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-4 text-2xl text-white/70 hover:text-white transition"
              >
                ✕
              </button>

              {/* Image */}
              <img
                src={selected.img}
                alt={selected.title}
                className="w-full rounded-lg mb-6"
              />

              {/* Footer */}
              <div className="flex justify-between items-center">
                <h4 className="text-xl font-semibold">{selected.title}</h4>
                {selected.pdf && (
                  <a
                    href={selected.pdf}
                    download
                    className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/80 transition-all"
                  >
                    Download PDF
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
