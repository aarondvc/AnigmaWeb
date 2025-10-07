import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const designs = {
  templates: [
    {
      id: 1,
      title: "Business Card Template",
      description: "A professional, minimalist business card design featuring clean typography and a modern layout.", // NEW
      img: "/designs/business-card-thumb.jpg",
      pdf: "/designs/business-card.pdf",
    },
    {
      id: 2,
      title: "Poster Template",
      description: "A vibrant, eye-catching poster template perfect for events or product launches.", // NEW
      img: "/designs/poster-thumb.jpg",
      pdf: "/designs/poster.pdf",
    },
  ],
  customer: [
    {
      id: 3,
      title: "Custom Flyer (Watermarked)",
      description: "Client work: Custom-designed flyer for a local business promotion. Focus on brand identity.", // NEW
      img: "/designs/custom-flyer-watermarked.jpg",
    },
    {
      id: 4,
      title: "Custom Banner (Watermarked)",
      description: "Client work: A digital banner designed for social media advertising, optimized for high click-through rates.", // NEW
      img: "/designs/custom-banner-watermarked.jpg",
    },
  ],
};

// Utility to prevent body scrolling when modal is open
const useScrollLock = (isLocked) => {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLocked]);
};


export const DesignsSection = () => {
  const [selected, setSelected] = useState(null);
  useScrollLock(!!selected); // Lock scroll when a design is selected

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

        {/* Template and Customer sections (content remains the same) */}
        {/* ... (Your existing Templates Section) ... */}
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
        {/* ... (Your existing Customer Work Section) ... */}
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

      {/* Modal - Enhanced Structure */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ duration: 0.2 }}
              // MODAL STYLING: Changed size to allow better mobile viewing
              className="relative bg-card rounded-2xl p-6 max-w-4xl w-full mx-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-3xl font-light text-foreground/70 hover:text-primary transition z-10"
                aria-label="Close"
              >
                &times;
              </button>

              {/* Modal Content */}
              <div className="grid md:grid-cols-2 gap-6 items-start">
                {/* Image (Left) */}
                <div className="rounded-xl overflow-hidden shadow-lg border border-border/50">
                    <img
                        src={selected.img}
                        alt={selected.title}
                        className="w-full h-auto"
                    />
                </div>

                {/* Details (Right) */}
                <div className="text-left space-y-4">
                    <h4 className="text-3xl font-bold text-foreground">{selected.title}</h4>
                    
                    {/* New Description */}
                    <p className="text-muted-foreground text-lg border-b border-border pb-4">
                        {selected.description}
                    </p>

                    {/* Download Button */}
                    <div className="pt-4">
                        {selected.pdf ? (
                          <a
                            href={selected.pdf}
                            download
                            className="cosmic-button flex items-center justify-center gap-2"
                          >
                            Download PDF
                          </a>
                        ) : (
                          <p className="text-sm text-gray-500 italic">
                            Client work is watermarked and not available for download.
                          </p>
                        )}
                    </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};