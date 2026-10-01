import { useTheme } from "../context/theme/useTheme";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  const Icon = theme === "dark" ? SunIcon : MoonIcon;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="  text-text-h hover:text-accent-main cursor-pointer "
    >
      <Icon aria-hidden="true" className="h-5 w-5" />
    </button>
  );
};
