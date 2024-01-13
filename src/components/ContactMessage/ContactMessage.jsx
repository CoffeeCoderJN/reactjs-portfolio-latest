import { BsStars } from "react-icons/bs";
import MukulImg from "../../assets/mukulblck.jpg";
import { MdDoubleArrow } from "react-icons/md";

const ContactMessage = () => {
  return (
    <section className="min-h-fit flex flex-col justify-start items-center py-16 px-2 2xl:px-32 md:px-5 text-center bg-gradient-to-br from-white to-neutral-100 dark:from-neutral-900 dark:to-[#0d0c0e]">
      <div className="text-3xl md:text-4xl lg:text-5xl font-normal text-neutral-700 dark:text-neutral-200 pb-10">
        <h1>Good Design is</h1>
        <h1>Noticeable & Great Design</h1>
        <h1 className="flex gap-2 items-center justify-center">
          is{" "}
          <span className="text-amber-500 font-extrabold"> Invincible. </span>
          <BsStars className="text-amber-500" />
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <img
          src={MukulImg}
          alt=""
          className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 border-neutral-400 dark:border-neutral-500"
        />
        <p className="text-xs md:text-sm opacity-80 font-extralight">
          Mukul Rajendra Dharashivkar
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="font-light text-sm md:text-xl pt-10 opacity-50">
          Let's shape the projects of your future together.
        </h3>
        <div className="flex items-center justify-center gap-5">
          <h2 className="text-2xl md:text-3xl">Brief me now</h2>
          <span className="animate-bounce">
            <MdDoubleArrow className="text-2xl md:text-3xl rotate-90" />
          </span>
        </div>
      </div>
    </section>
  );
};
export default ContactMessage;
