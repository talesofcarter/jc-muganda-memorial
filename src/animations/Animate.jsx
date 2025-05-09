import { motion } from "framer-motion";

export const dominoVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      y: -50,
      rotateX: 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
  },
};

export const DominoContainer = ({ children }) => (
  <motion.div
    variants={dominoVariants.container}
    initial="hidden"
    animate="visible"
  >
    {children}
  </motion.div>
);

export const DominoItem = ({ children, ...props }) => (
  <motion.div variants={dominoVariants.item} {...props}>
    {children}
  </motion.div>
);
