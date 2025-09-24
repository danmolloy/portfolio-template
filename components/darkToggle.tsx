"use client";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    /* 
      Implement logic to set the initial theme based on localStorage 
      and system preference (prefers-color-scheme). 
      Also update `isDark` state accordingly.
      See https://tailwindcss.com/docs/dark-mode
     */
  }, []);

  const toggleTheme = () => {
    /* 
    Implement toggle between dark and light theme:
      - Update `document.documentElement.classList`
      - Persist theme choice in localStorage
      - Update `isDark` state
    */
    setIsDark(!isDark);
  };

  return (
    <div className="flex flex-row items-center justify-center mr-4">
      <button
        className="w-8 h-4 mx-1 rounded-full relative cursor-pointer bg-blue-500 dark:bg-blue-900"
        onClick={toggleTheme}
      >
        <div
          className={`w-4 h-4 top-0 bg-neutral-100  border border-neutral-400 rounded-full absolute transition-all duration-500
         dark:left-0 right-0`}
        />
      </button>
      <div className="text-yellow-500">{isDark ? <FaMoon /> : <FaSun />}</div>
    </div>
  );
}
