import { createTheme } from "@mui/material";
import { createContext, useContext } from "react";

export const ThemeContext = createContext({});

const ThemeProvider = (props) => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Averia Sans Libre", "Montserrat"].join(","),
    },
  });

  theme.typography.h4 = {
    fontFamily: "Averia Sans Libre",
    fontWeight: 700,
    fontSize: "2.5rem",
    textTransform: "uppercase",
    color: "#3c3c3c",
  };

  theme.typography.h6 = {
    fontFamily: "Averia Sans Libre",
    fontWeight: 700,
    fontSize: "1.5rem",
    color: "#3c3c3c",
  };

  theme.typography.subtitle1 = {
    fontFamily: "Averia Sans Libre",
    fontWeight: 700,
    fontSize: "1rem",
    color: "#3c3c3c",
  };

  theme.typography.subtitle2 = {
    fontFamily: "Montserrat",
    fontSize: "1rem",
    color: "#3c3c3c",
  };

  theme.typography.body1 = {
    fontFamily: "Montserrat",
    fontSize: ".85rem",
    color: "#3c3c3c",
    fontWeight: 400,
  };

  theme.typography.body2 = {
    fontFamily: "Montserrat",
    fontSize: ".8rem",
    color: "#3c3c3c",
  };

  theme.typography.overline = {
    fontFamily: "Montserrat",
    fontSize: ".7rem",
    color: "#3c3c3c",
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
export const useTheme = () => useContext(ThemeContext);
