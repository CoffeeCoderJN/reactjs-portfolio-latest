import { motion } from "framer-motion";
import { FeaturedCards } from "../card/FeaturedCards";

const FeaturedCardSection = () => {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="2xl:px-96 "
    >
      <FeaturedCards />
    </motion.div>
  );
};
export default FeaturedCardSection;
