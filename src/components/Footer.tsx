import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © 2026 Vishnupriya Cheemalamarri. Built with React, TailwindCSS, and passion for innovation.
      </p>
      <div className="flex gap-4">
        <a href="https://github.com/vishnupriya-cheemalamarri" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/vishnupriya-cheemalamarri-9b41a1290" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="mailto:cvpriya5002@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
