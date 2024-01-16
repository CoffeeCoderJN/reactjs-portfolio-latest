import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const SpotlightButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    btnRef.current.addEventListener("mousemove", handleMouseMove);
    btnRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef.current.removeEventListener("mousemove", handleMouseMove);
      btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <a
      href="mailto:mukul.dharashivkar99@gmail.com?subject=Lets work together!&body=Hello, I think we need you to work/collaborate on this particular product... Reach out as soon as you can."
      className=""
    >
      <motion.button
        whileTap={{ scale: 0.985 }}
        ref={btnRef}
        className="relative w-full max-w-xs overflow-hidden rounded-lg bg-neutral-200 dark:bg-neutral-900  px-4 py-3 text-lg font-medium text-white"
      >
        <span className="pointer-events-none relative z-10 mix-blend-difference">
          Write an email
        </span>
        <span
          ref={spanRef}
          className="pointer-events-none absolute left-[50%] top-[50%] h-36 w-36 -translate-x-[50%] -translate-y-[50%] rounded-full bg-neutral-800 dark:bg-slate-100 blur-sm"
        />
      </motion.button>
    </a>
  );
};

export default SpotlightButton;
