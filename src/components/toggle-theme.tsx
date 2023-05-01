import { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ToggleTheme = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  if (theme === "dark") {
    return (
      <BsSun
        className="text-white cursor-pointer"
        size={36}
        onClick={() => setTheme("light")}
      />
    );
  }

  return (
    <BsMoon
      className="text-white cursor-pointer"
      size={36}
      onClick={() => setTheme("dark")}
    />
  );
};

export default ToggleTheme;
