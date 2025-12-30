// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    // Removed specific bg-white from here so it follows the CSS body variable
    <main className="transition-colors duration-500">
      <Navbar />
      
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-8 text-center text-sm text-slate-500 dark:text-slate-600 border-t border-slate-100 dark:border-slate-900">
        © {new Date().getFullYear()} Piruntha. Built with React & Tailwind.
      </footer>
    </main>
  );
}