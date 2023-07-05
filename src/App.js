import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import { motion } from "framer-motion";
import Projects from "./components/Projects";


// import Testimonials from "./components/Testimonials";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="h-screen">
      <div className={darkMode && "dark"}>
        <main className="bg-white dark:bg-[#050505] to-bg-[#050505] dark:text-white duration-1000 ease-in-out">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.2, 0.4, 0.8, 1] }}
            transition={{ duration: 0.2 }}
          >
            <Hero />
          </motion.div>
          <About />
          <Skills />
          {/* <Portfolio /> */}
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
