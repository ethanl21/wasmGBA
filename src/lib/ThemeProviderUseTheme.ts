import { createContext, useContext } from "react";

export type ThemeProviderState = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const initialState = {
  theme: "system",
  setTheme: () => null,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
