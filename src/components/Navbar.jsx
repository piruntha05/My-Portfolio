// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const sectionIds = ["about", "education", "skills", "projects"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  
  // --- THEME LOGIC START ---
  const [isDark, setIsDark] = useState(() => {
    // Check local storage or system preference on initial load
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  // --- THEME LOGIC END ---

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section logic
      let current = "home";
      if (window.scrollY > 100) {
        for (const id of sectionIds) {
          const section = document.getElementById(id);
          if (section) {
            const top = section.offsetTop - 150;
            if (window.scrollY >= top) {
              current = id;
            }
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", href: "#" },
    ...sectionIds.map((id) => ({
      id,
      label: id.charAt(0).toUpperCase() + id.slice(1),
      href: `#${id}`,
    })),
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? "py-3 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-sm" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <h1 className="text-2xl font-black tracking-tighter dark:text-white text-slate-900">
          Piruntha.<span className="text-[#7B2CBF]">BT</span>
        </h1>

        <div className="flex items-center gap-6">
          {/* NAVIGATION LINKS */}
          <ul className="hidden md:flex items-center gap-1 md:gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-bold transition-all duration-300 rounded-lg ${
                    active === item.id
                      ? "text-[#7B2CBF] bg-[#7B2CBF]/10"
                      : "text-slate-500 dark:text-slate-400 hover:text-[#7B2CBF]"
                  }`}
                >
                  {item.label}
                  {active === item.id && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#7B2CBF] rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* THEME TOGGLE BUTTON */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-[#7B2CBF] border border-slate-200 dark:border-slate-800 shadow-sm hover:scale-110 transition-all active:scale-95"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}