import { motion } from 'framer-motion';

const Section = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}       // start below with 0 opacity
      whileInView={{ opacity: 1, y: 0}}     // animate to visible position
      transition={{ duration: 1 }}         // animation duration
      viewport={{ once: true, amount: 0.2 }} // only animate once, when 20% is visible
    >
      {children}
    </motion.div>
  );
};

export default Section;
