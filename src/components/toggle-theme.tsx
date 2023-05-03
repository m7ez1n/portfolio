import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";

const ToggleTheme = () => {
  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

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
