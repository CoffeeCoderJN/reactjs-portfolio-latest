import MukulImg from "../../assets/mukul.jpg";
import { motion } from "framer-motion";
import { Reveal } from "../utils/Reveal";

const AboutDetailsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex flex-col min-h-fit items-center justify-start text-center xl:text-left xl:flex-row max-w-7xl px-4 mx-auto md:pt-0 md:pb-12 md:mx-20 z-10"
    >
      <motion.img
        src={MukulImg}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-10 md:mb-0 flex-shrink-0 rounded-3xl w-64 h-64 object-cover md:rounded-3xl md:w-64 md:h-95 xl:w-[300px] xl:h-[350px] shadow-lg shadow-gray-400/30 dark:shadow-black/30"
      />
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-5 ml-0  xl:pt-0 xl:ml-20 md:pt-10"
      >
        <h4 className="text-2xl font-medium text-amber-600 dark:text-amber-300">
          <Reveal width="100%">Here's a Little Background.</Reveal>
        </h4>
        {/* <div className="bg-white dark:bg-[#101111] p-5 rounded-3xl shadow-lg shadow-gray-400/50 dark:shadow-black/30 text-gray-800 dark:text-gray-300 "> */}
        <div className="bg-white/70 dark:bg-[#101111]/70 p-5 rounded-3xl shadow-lg shadow-gray-400/50 dark:shadow-black/30 text-gray-800 dark:text-gray-300 backdrop-filter backdrop-blur-lg bg-opacity-30 ease-in-out">
          {/* border dark:border-white/5 border-black/10 */}
          <p className="text-sm font-light">
            {/* Hi, I am{" "}
              <span className="font-semibold">Mukul Rajendra Dharashivkar</span>{" "}
              and everyone calls me Mukul. I am a{" "}
              <span className="font-semibold">Full Stack Web Developer</span>. I
              am proficient in ReactJS, Spring, Spring Boot, Bootstrap, Tailwind
              CSS and many more. I am looking for new opportunities to implement
              and increase my skills in software development and web
              development. */}
            Hi there, my name is{" "}
            <span className="font-semibold text-black dark:text-white">
              Mukul Dharashivkar
            </span>
            , I am 23 years old. Even from a young age, I liked computer
            technology, I was always Interested in the news and trends of IT
            technologies with great pleasure. Then I realized that I really want
            to develop myself in the IT direction because this field is
            developing very dynamically and i wanted to keep up with the times.
            The further I went, the more inspiration and the desire to study
            programming in more depth came to me. <br />
            <br /> I am an{" "}
            <span className="font-semibold text-black dark:text-white">
              open-minded and determined person
            </span>
            . I learn quickly, I like to learn new things. My hobbies are
            coding, playing cricket, and drawing. I believe that working for
            you, I will be able to bring something new and useful to your teams,
            in turn, I will apply all my knowledge so that the company becomes
            even more promising, and the team becomes even more productive and
            friendly, since I am a person who will always bring with a good mood
            and motivation to work. <br />
            <br />{" "}
            <span className="font-semibold text-black dark:text-white">
              I'm a team player.
            </span>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default AboutDetailsSection;
