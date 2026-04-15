"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";

const categories = ["All", "Headshots", "Events", "Speaking", "Lifestyle"];

// Placeholder gallery items — replace with Sanity data
const galleryItems = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `https://placehold.co/600x${400 + (i % 3) * 100}/C9184A/FFF5F7?text=Photo+${i + 1}`,
  caption: `Photo ${i + 1}`,
  category: categories[1 + (i % 4)],
}));

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<null | typeof galleryItems[0]>(null);

  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-brand-navy section-padding pb-12">
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp} className="section-tag text-brand-coral mb-4">
              <div className="h-px w-12 bg-brand-gold" /> Gallery
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
              Behind the <span className="text-brand-gold">Lens</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-white/60 text-xl">
              Moments from work, life, events, and everything in between.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-brand-blush py-6 sticky top-16 md:top-20 z-30 border-b border-brand-rose/10">
        <div className="container-wide flex gap-3 overflow-x-auto no-scrollbar px-4 md:px-8 lg:px-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 px-5 py-2 rounded-full font-accent font-semibold text-sm transition-all ${
                active === cat
                  ? "bg-brand-rose text-white shadow-md"
                  : "bg-white text-brand-navy/60 hover:text-brand-rose"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="section-padding bg-brand-blush">
        <div className="container-wide">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  variants={scaleIn}
                  layout
                  className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl"
                  onClick={() => setLightbox(item)}
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/40 transition-all duration-300 flex items-end p-4">
                    <span className="text-white font-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.caption}
                    </span>
                  </div>
                  <span className="absolute top-3 right-3 bg-brand-rose text-white font-accent text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.category}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-navy/95 z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.caption} className="w-full rounded-2xl" />
              <p className="text-white/60 text-center mt-4 font-accent">{lightbox.caption}</p>
            </motion.div>
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white font-display text-3xl"
              onClick={() => setLightbox(null)}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
