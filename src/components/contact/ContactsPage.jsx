import { motion } from "framer-motion";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import Section from "../common/Section";

const Contact = () => {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Get in touch with me anytime, through social media, e-mail."
      // className="bg-gradient-to-b from-sky-900/5 to-white dark:from-neutral-800/40 dark:to-neutral-900"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.1,
        }}
        className="container mx-auto flex justify-center flex-col-reverse lg:flex-row lg:mt-10 px-5 md:px-20 lg:px-20 lg:space-x-4"
      >
        <ContactForm />
        <ContactDetails />
      </motion.div>
    </Section>
  );
};

export default Contact;
