
import "./SkillsMarquee.css";

// import { ThemeContext } from '../../contexts/ThemeContext';
// import { skillsImage } from '../../utils/skillsImage'

import java from "../../assets/yellow/javay.png";
import spring from "../../assets/yellow/springy.png";
import react from "../../assets/yellow/reacty.png";
import javascript from "../../assets/yellow/javascripty.png";
import mysql from "../../assets/yellow/mysqly.png";
import python from "../../assets/yellow/pythony.png";
import css from "../../assets/yellow/tailwindy.png";
import nextjs from "../../assets/yellow/nexty.png";
import redux from "../../assets/yellow/reduxy.png";
import ubuntu from "../../assets/yellow/ubuntuy.png";
import css3 from "../../assets/yellow/css3y.png";
import postman from "../../assets/yellow/postmany.png";
import boot from "../../assets/yellow/bootstrapy.png";
import git from "../../assets/yellow/gity.png";

const skillsData = [
  {
    id: 1,
    image: java,
    title: "Java",
  },
  {
    id: 2,
    image: spring,
    title: "Spring Boot",
  },
  {
    id: 3,
    image: javascript,
    title: "Javascript",
  },
  {
    id: 4,
    image: react,
    title: "React.js",
  },
  {
    id: 5,
    image: redux,
    title: "React-Redux",
  },
  {
    id: 6,
    image: nextjs,
    title: "Next.js",
  },
  {
    id: 7,
    image: mysql,
    title: "MySQL",
  },
  {
    id: 8,
    image: python,
    title: "Python",
  },
  {
    id: 9,
    image: css,
    title: "Tailwind CSS",
  },
  {
    id: 10,
    image: css3,
    title: "CSS",
  },
  {
    id: 11,
    image: boot,
    title: "Bootstrap CSS",
  },
  {
    id: 12,
    image: ubuntu,
    title: "Ubuntu",
  },
  {
    id: 13,
    image: postman,
    title: "Postman",
  },
  {
    id: 14,
    image: git,
    title: "Git",
  },
];

function SkillsMarquee() {
  return (
    // <div className="skills ml-20">
    //   <div className="">
    //     <div className="skill--scroll px-20 relative">
    //       <Marquee
    //         gradient={false}
    //         speed={70}
    //         delay={0}
    //         play={true}
    //         direction="left"
    //         loop={10}
    //       >
    //         {skillsData.map(({ id, image, title }) => (
    //           <div
    //             key={id}
    //             className="skill--box flex justify-start p-3 shadow-lg shadow-gray-400/50 dark:shadow-black/30 rounded-xl object-cover w-[4.5rem] h-[4.5rem] md:w-20 md:h-20 dark:bg-neutral-900 bg-gray-100 border dark:border-white/10 border-black/10"
    //           >
    //             <img
    //               src={image}
    //               alt={title}
    //               className="w-36 h-36 md:h-44 md:w-44 object-contain group-hover:grayscale"
    //             />
    //           </div>
    //         ))}
    //       </Marquee>
    //     </div>
    //   </div>
    // </div>
    <div className="relative flex overflow-x-hidden">
      <div className="py-5 flex animate-marquee whitespace-nowrap">
        {skillsData.map(({ id, image, title }) => (
          <div
            key={id}
            className="skill--box flex justify-start p-3 shadow-lg shadow-gray-400/50 dark:shadow-black/30 rounded-xl object-cover w-[4.5rem] h-[4.5rem] md:w-20 md:h-20 dark:bg-neutral-900 bg-gray-100"
          >
            <img
              src={image}
              alt={title}
              className="w-36 h-36 md:h-44 md:w-44 object-contain group-hover:grayscale"
            />
          </div>
        ))}
      </div>

      <div className="absolute flex top-0 py-5 animate-marquee2 whitespace-nowrap">
      {skillsData.map(({ id, image, title }) => (
          <div
            key={id}
            className="skill--box flex justify-start p-3 shadow-lg shadow-gray-400/50 dark:shadow-black/30 rounded-xl object-cover w-[4.5rem] h-[4.5rem] md:w-20 md:h-20 dark:bg-neutral-900 bg-gray-100"
          >
            <img
              src={image}
              alt={title}
              className="w-36 h-36 md:h-44 md:w-44 object-contain group-hover:grayscale"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsMarquee;
