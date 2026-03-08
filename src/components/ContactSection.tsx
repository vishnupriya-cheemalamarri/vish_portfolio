import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Linkedin, Send, Github } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:cvpriya5002@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}`;
  };

  return (
    <section id="contact" className="section-padding section-light" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass-card p-8 space-y-5"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity neon-glow flex items-center justify-center gap-2"
            >
              <Send size={16} /> Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-6 flex flex-col justify-center"
          >
            <div className="glass-card p-5 flex items-center gap-4 hover:neon-glow transition-shadow duration-300">
              <div className="p-3 rounded-lg bg-primary/10">
                <Mail className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:cvpriya5002@gmail.com" className="font-medium hover:text-primary transition-colors">
                  cvpriya5002@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card p-5 flex items-center gap-4 hover:neon-glow transition-shadow duration-300">
              <div className="p-3 rounded-lg bg-primary/10">
                <Phone className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a href="tel:+919908339120" className="font-medium hover:text-primary transition-colors">
                  +91-9908339120
                </a>
              </div>
            </div>

            <div className="glass-card p-5 flex items-center gap-4 hover:neon-glow transition-shadow duration-300">
              <div className="p-3 rounded-lg bg-primary/10">
                <Linkedin className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/vishnupriya-cheemalamarri-9b41a1290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-primary transition-colors text-sm"
                >
                  vishnupriya-cheemalamarri
                </a>
              </div>
            </div>

            <div className="glass-card p-5 flex items-center gap-4 hover:neon-glow transition-shadow duration-300">
              <div className="p-3 rounded-lg bg-primary/10">
                <Github className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">GitHub</p>
                <a
                  href="https://github.com/vishnupriya-cheemalamarri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-primary transition-colors text-sm"
                >
                  vishnupriya-cheemalamarri
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
