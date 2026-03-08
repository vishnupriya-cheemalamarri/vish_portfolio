import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(90deg, hsl(172 66% 50%), hsl(262 83% 58%))",
      }}
    />
  );
};

export default ScrollProgress;
