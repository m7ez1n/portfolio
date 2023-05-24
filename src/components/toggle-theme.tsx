import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (currentTheme === "light") {
    return (
      <BsMoon
        className="cursor-pointer text-black/70"
        size={36}
        onClick={() => setTheme("dark")}
      />
    );
  }

  return (
    <BsSun
      className="text-white cursor-pointer"
      size={36}
      onClick={() => setTheme("light")}
    />
  );
};

export default ToggleTheme;
