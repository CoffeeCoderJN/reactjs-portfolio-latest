import { motion } from "framer-motion";
import BlurCircles from "../BlurCirclesBG/BlurCircles";
import Quote from "../quote/Quote";

const QuoteSection = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Background blur circles */}
        <BlurCircles />
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="relative pt-10 md:pt-5 lg:pt-0"
      >
        <Quote />
      </motion.div>
    </div>
  );
};
export default QuoteSection;
