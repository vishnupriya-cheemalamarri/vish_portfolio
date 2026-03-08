import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Hybrid Attention CNN for COPD Detection",
    subtitle: "Summer Research Internship – VIT Chennai",
    desc: "Designed a Hybrid Attention CNN model for automated COPD detection from chest X-ray images. Focuses on improving diagnostic accuracy using deep learning attention mechanisms.",
    tags: ["Python", "Deep Learning", "CNN", "Medical Imaging"],
    category: "AI",
  },
  {
    title: "Collaborative Sheets",
    subtitle: "Real-time Collaborative Spreadsheet",
    desc: "Real-time collaborative spreadsheet with live multi-user synchronization, presence indicators, formula parser (SUM, AVERAGE, MIN, MAX), CSV export, and keyboard navigation.",
    tags: ["Next.js", "TypeScript", "Firebase", "Zustand", "Framer Motion"],
    category: "Web",
  },
  {
    title: "LLM Powered Query Retrieval System",
    subtitle: "Semantic Search Engine",
    desc: "Built a semantic search system for PDFs, DOCX files, and emails across domains like Insurance, Legal, HR, and Compliance.",
    tags: ["Python", "FastAPI", "React", "FAISS", "Pinecone"],
    category: "AI",
  },
  {
    title: "Decentralized File Manager",
    subtitle: "Blockchain-based Storage",
    desc: "Blockchain-based system for tamper-proof file storage and decentralized file management with smart contract access control.",
    tags: ["Ethereum", "IPFS", "Node.js", "Web3.js"],
    category: "Blockchain",
  },
  {
    title: "Online Auction System",
    subtitle: "Full-stack Bidding Platform",
    desc: "Full-stack auction platform with user authentication, product listing, and real-time bidding.",
    tags: ["MERN Stack"],
    category: "Web",
  },
  {
    title: "Smart Library System",
    subtitle: "AWS Deployed Library",
    desc: "Deployed a React library system using AWS S3 and DynamoDB for seamless book management and user experience.",
    tags: ["React.js", "AWS", "S3", "DynamoDB"],
    category: "Web",
  },
  {
    title: "Tic Tac Toe – AI vs User",
    subtitle: "AI Game with Minimax",
    desc: "Built an unbeatable AI opponent using Minimax Algorithm with Alpha-Beta Pruning for optimal gameplay.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web",
  },
  {
    title: "ThinkBoard – MERN Notes App",
    subtitle: "Full-stack Notes Application",
    desc: "Full-stack notes application built with React, Node.js, Express.js, and MongoDB. Implemented REST APIs for note creation, editing, and deletion. Added backend rate limiting using Upstash Redis. Production server configuration serving React build. Implemented error handling and secure environment configuration",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Redis"],
    category: "Web",
  },
];

const categories = ["All", "AI", "Web", "Blockchain"];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const [scrollIndex, setScrollIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const carouselRef = useRef<HTMLDivElement>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const scroll = (dir: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 380;
      carouselRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="section-padding section-light" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-8" />

          {/* Filter */}
          <div className="flex gap-3 mb-8 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === c
                    ? "bg-primary text-primary-foreground neon-glow"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full glass-card hover:neon-glow transition-shadow hidden md:block"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full glass-card hover:neon-glow transition-shadow hidden md:block"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          >
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i }}
                className="min-w-[340px] max-w-[360px] snap-start glass-card p-6 flex flex-col justify-between group hover:neon-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-primary mono-font mb-3">{p.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
