import Section from "../common/Section";
import { HoverImageLinks } from "../HoverImageLinks/HoverImageLinks";
import ContactMessage from "../ContactMessage/ContactMessage";
import SpotlightButton from "../reusable/SpotlightButton";

const Contact = () => {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Get in touch with me anytime, through social media, e-mail."
      className=""
    >
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.1,
        }}
        className="container flex justify-center flex-col lg:flex-row lg:mt-10 px-5 md:px-20 lg:space-x-4"
      >
        <ContactDetails />
        <ContactForm />
      </motion.div> */}
      <div className="w-full">
        <ContactMessage />
        <SpotlightButton />
        <div className="pt-14">
          <HoverImageLinks />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
