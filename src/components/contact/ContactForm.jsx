import { FiSend } from "react-icons/fi";
import FormInput from "../reusable/FormInput";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="w-full lg:w-1/2 bg-gray-100 dark:bg-[#101111] rounded-xl shadow-lg shadow-gray-400/30 dark:shadow-black/30 border dark:border-white/5 border-black/5"
    >
      <div className="leading-loose">
        <form
          action="https://getform.io/f/e05b6bc9-032c-4a2c-a5af-ff2107822d78"
          method="POST"
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl text-left"
        >
          <p className="font-medium text-neutral-600 dark:text-neutral-200 text-2xl mb-8">
            Leave a Message
          </p>
          <FormInput
            inputLabel="Full Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="Your Name"
            ariaLabelName="Name"
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="Your email"
            ariaLabelName="Email"
          />
          <FormInput
            inputLabel="Subject"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="Subject"
            ariaLabelName="Subject"
          />

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 bg-white dark:bg-[#050505] dark:text-white border border-black/10 dark:border-white/10 rounded-md shadow-sm text-md resize-none"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex w-40 items-center justify-center group mt-10 mb-0 bg-gradient-to-r border-2 border-amber-500 hover:border-transparent hover:from-amber-600 hover:to-amber-500 px-10 py-3 rounded-lg cursor-pointer font-normal tracking-[1px] hover:text-black shadow-lg shadow-gray-400/30 dark:shadow-black/40 bg-gray-200 dark:bg-[#101111]"
            >
              Send
              <FiSend className="ml-2" />
            </motion.a>
          </div>

          {/* <div className="flex items-center w-40 justify-center group mt-5 mb-0 bg-gradient-to-r border-2 border-amber-500 hover:border-transparent hover:from-amber-600 hover:to-amber-500 px-5 py-2 rounded-lg cursor-pointer font-normal tracking-[1px] hover:text-black shadow-lg shadow-gray-400/30 dark:shadow-black/40 bg-gray-200 dark:bg-[#101111]">
            <Button title="Send" type="submit" aria-label="Send Message" />
            <FiSend className="ml-2" />
          </div> */}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;