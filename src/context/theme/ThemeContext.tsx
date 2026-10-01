import { createContext } from "react";

export type Theme = "light" | "dark";

export type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

// create Context
export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);
