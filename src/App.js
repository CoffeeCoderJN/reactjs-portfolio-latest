import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import AppFooter from "./components/AppFooter";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import { motion } from "framer-motion";
import Projects from "./components/Projects";
import PreLoader from "./components/PreLoader";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen">
      <div className={darkMode && "dark"}>
        {loading ? (
          <PreLoader loading={loading} />
        ) : (
          <main className="bg-white dark:bg-neutral-900 dark:text-white duration-700 ease-in-out">
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
            <Projects />
            <Contact />
            <AppFooter />
          </main>
        )}
      </div>
    </div>
  );
}

export default App;
