import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import { motion } from "framer-motion";


// import Testimonials from "./components/Testimonials";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="h-screen">
      <div className={darkMode && "dark"}>
        <main className="bg-white dark:bg-[#0c0a12] to-[#0c0a12] dark:text-white">
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
          <Portfolio />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
