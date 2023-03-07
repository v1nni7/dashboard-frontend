export type ThemeProps = {
  colors: {
    blue50: string;
    blue100: string;
    blue200: string;
    blue300: string;
    blue400: string;
    blue500: string;
    blue600: string;
    blue700: string;
    blue800: string;
    blue900: string;
  };
  rounded: {
    sm: string;
    md: string;
    lg: string;
    none: string;
  };
};

const theme: ThemeProps = {
  colors: {
    blue50: "#eff6ff",
    blue100: "#dbeafe",
    blue200: "#bfdbfe",
    blue300: "#93c5fd",
    blue400: "#60a5fa",
    blue500: "#3b82f6",
    blue600: "#2563eb",
    blue700: "#1d4ed8",
    blue800: "#1e40af",
    blue900: "#1e3a8a",
  },
  rounded: {
    none: "0",
    sm: "0.125rem",
    md: "0.25rem",
    lg: "0.5rem",
  },
};

export default theme;
