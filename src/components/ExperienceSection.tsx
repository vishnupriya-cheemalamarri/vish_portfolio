import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding section-dark" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />

          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary neon-glow" />
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="glass-card p-6 hover:neon-glow transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="text-primary" size={20} />
                <div>
                  <h3 className="font-bold text-lg">MERN Stack Development Intern (Training Program)</h3>
                  <p className="text-sm text-primary mono-font">Ethnus Technologies | May 2024 – July 2024</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Worked on developing frontend components, authentication systems, and RESTful APIs using the MERN stack.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
