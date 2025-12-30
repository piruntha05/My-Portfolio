// src/components/ThemeToggle.jsx
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // Initialize state based on localStorage or system preference
  const [isDark, setIsDark] = useState(() => {
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

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/50 text-[#7B2CBF] transition-all duration-300 hover:scale-110 active:scale-95 border border-slate-200 dark:border-slate-700 shadow-sm"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun size={18} className="transition-transform duration-500 rotate-0 scale-100" />
      ) : (
        <Moon size={18} className="transition-transform duration-500 rotate-0 scale-100" />
      )}
    </button>
  );
}