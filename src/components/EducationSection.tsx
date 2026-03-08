import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding section-dark" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass-card p-8 hover:neon-glow transition-shadow duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <GraduationCap className="text-primary" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Vellore Institute of Technology – Chennai</h3>
                <p className="text-primary mono-font text-sm mt-1">Bachelor of Technology in Computer Science and Engineering</p>
                <div className="flex gap-6 mt-4">
                  <div>
                    <p className="text-xs text-muted-foreground">CGPA</p>
                    <p className="text-2xl font-bold gradient-text">8.86<span className="text-sm text-muted-foreground">/10</span></p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Expected Graduation</p>
                    <p className="text-lg font-semibold">July 2027</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
