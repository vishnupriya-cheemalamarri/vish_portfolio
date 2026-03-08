import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Linkedin, Phone } from "lucide-react";

const roles = [
  "AI Developer",
  "Full Stack Engineer",
  "Blockchain Enthusiast",
  "Problem Solver",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Royal gradient bg */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 animate-gradient-shift"
          style={{
            background: "linear-gradient(135deg, hsl(166 56% 8%), hsl(162 72% 18%), hsl(160 84% 25%))",
            backgroundSize: "200% 200%",
          }}
        />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 20% 50%, hsl(160 84% 39% / 0.15), transparent 50%), radial-gradient(ellipse at 80% 20%, hsl(160 67% 52% / 0.15), transparent 50%), radial-gradient(ellipse at 50% 80%, hsl(149 80% 90% / 0.06), transparent 50%)",
        }} />
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-jade/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-mint/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <img src="/vishphoto.jpeg" alt="Vishnupriya Cheemalamarri" className="w-28 h-28 md:w-36 md:h-36 rounded-full mx-auto object-cover border-2 border-primary/50 neon-glow" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mono-font text-jade text-sm mb-4 tracking-widest uppercase"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          Vishnupriya{" "}
          <span className="gradient-text">Cheemalamarri</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground mb-2"
        >
          Computer Science Engineer | AI & Full Stack Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="h-8 mb-6 flex items-center justify-center"
        >
          <span className="mono-font text-primary text-lg">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="max-w-2xl mx-auto text-muted-foreground mb-10 leading-relaxed"
        >
          Building intelligent systems, scalable web applications, and innovative
          solutions using AI, blockchain, and modern web technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <a
            href="#projects"
            className="btn-royal px-6 py-3"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-colors"
          >
            <Mail className="inline mr-2" size={16} />
            Contact Me
          </a>
          <a
            href="#"
            className="px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
          >
            <Download className="inline mr-2" size={16} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex gap-6 justify-center items-center text-muted-foreground text-sm"
        >
          <a href="tel:+919908339120" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Phone size={14} /> +91-9908339120
          </a>
          <a href="mailto:cvpriya5002@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Mail size={14} /> cvpriya5002@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/vishnupriya-cheemalamarri-9b41a1290"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            <Linkedin size={14} /> LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-16"
        >
          <a href="#about" className="inline-block animate-bounce">
            <ArrowDown size={24} className="text-muted-foreground" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
