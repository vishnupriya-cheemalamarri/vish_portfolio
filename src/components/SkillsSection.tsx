import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "C", "C++", "JavaScript", "DSA"],
    color: "from-emerald to-jade",
  },
  {
    title: "Web Development",
    skills: ["HTML5", "CSS3", "React.js", "Node.js", "Express.js", "MongoDB", "MERN Stack", "Tailwind CSS"],
    color: "from-jade to-emerald-deep",
  },
  {
    title: "AI & Machine Learning",
    skills: ["Deep Learning", "CNN", "Hybrid Attention Models", "Computer Vision", "Image Processing", "LLMs", "Semantic Search"],
    color: "from-emerald-deep to-jade",
  },
  {
    title: "Blockchain",
    skills: ["Ethereum", "Smart Contracts", "IPFS", "Web3.js", "DApps"],
    color: "from-jade to-emerald",
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Google Colab", "Netlify", "Render", "FAISS", "Pinecone"],
    color: "from-emerald to-emerald-deep",
  },
  {
    title: "Databases",
    skills: ["SQL", "MongoDB", "NoSQL"],
    color: "from-emerald-deep to-emerald",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding section-dark" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="glass-card p-6 hover:neon-glow transition-shadow duration-300 group"
            >
              <h3 className="font-semibold text-lg mb-4 gradient-text">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-full bg-secondary text-secondary-foreground font-medium group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
