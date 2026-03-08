import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";

const certs = [
  { title: "Summer Research Internship", org: "VIT Chennai", year: "2025" },
  { title: "MERN Stack Development Certificate", org: "Ethnus Technologies", year: "2024" },
  { title: "C/C++ Certificate", org: "Shanmugam Institute Of Computer Technology", year: "" },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding section-light">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-8" />
        </motion.div>

        <div className="relative">
          <button onClick={() => scroll("left")} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full glass-card hover:neon-glow hidden md:block">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll("right")} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full glass-card hover:neon-glow hidden md:block">
            <ChevronRight size={20} />
          </button>

          <div ref={carouselRef} className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x">
            {certs.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.15 * i }}
                className="min-w-[280px] glass-card p-6 snap-start hover:neon-glow-purple transition-shadow duration-300"
              >
                <Award className="text-accent mb-3" size={28} />
                <h3 className="font-bold mb-1">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.org}</p>
                {c.year && <p className="text-xs text-primary mono-font mt-2">{c.year}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
