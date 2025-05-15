import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "../utils/util";
export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const storedtheme = localStorage.getItem("theme");
    if (storedtheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);
  const toggletheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode((prevValue) => !prevValue);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode((prevValue) => !prevValue);
    }
  };
  return (
    <button
      onClick={toggletheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-200 ",
        "focus:outline-hidden"
      )}
    >
      {darkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-400" />
      )}
    </button>
  );
};
