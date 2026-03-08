import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Brain, Code2, Sparkles } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "VIT Chennai", value: "CGPA 8.86/10" },
  { icon: Brain, label: "AI & ML", value: "Deep Learning" },
  { icon: Code2, label: "Full Stack", value: "MERN + More" },
  { icon: Sparkles, label: "Blockchain", value: "Web3 & DApps" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding section-light" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-8" />

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a <strong className="text-foreground">Computer Science Engineering student at Vellore Institute of Technology (VIT Chennai)</strong> with a CGPA of <strong className="text-foreground">8.86/10</strong>.
              </p>
              <p>
                I am passionate about <strong className="text-foreground">Artificial Intelligence, Machine Learning, Blockchain, and Full Stack Development</strong>.
              </p>
              <p>
                I enjoy building <strong className="text-foreground">intelligent systems, scalable web applications, and real-time collaborative platforms</strong> while exploring emerging technologies like <strong className="text-foreground">LLMs and decentralized systems</strong>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="glass-card p-5 text-center hover:neon-glow transition-shadow duration-300"
                >
                  <h.icon className="mx-auto mb-2 text-primary" size={28} />
                  <p className="font-semibold text-sm">{h.label}</p>
                  <p className="text-xs text-muted-foreground">{h.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
