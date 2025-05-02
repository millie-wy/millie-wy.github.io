import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import coding from "../../../Media/Icons/coding.png";
import { useTheme } from "../../Contexts/ThemeContextProvider";

const Coding = () => {
  const { theme } = useTheme();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const displayElement = () =>
      window.scrollY > 1010 ? setDisplay(true) : setDisplay(false);

    window.addEventListener("scroll", displayElement, { passive: true });
    return () => window.removeEventListener("scroll", displayElement);
  });

  return (
    <Box
      sx={{
        pl: { xs: "1.5rem", sm: "2rem" },
        position: "relative",
        height: 180,
        zIndex: display ? 99 : 0,
        opacity: display ? 100 : 0,
        transition: "all .5s ease-in-out",
      }}
    >
      <Box
        component="img"
        src={coding}
        sx={{
          position: "absolute",
          width: { xs: 40, sm: 50, md: 60 },
          left: { xs: -75, sm: -85, md: -95 },
          top: -10,
          mt: -1,
        }}
      />
      <Box
        sx={{
          background: "#3c3c3c",
          width: 15,
          height: 15,
          borderRadius: 50,
          position: "absolute",
          left: -10,
          top: -1,
        }}
      />
      <Typography variant="subtitle1" theme={theme}>
        2021 to 2023
      </Typography>
      <Typography
        variant="body1"
        theme={theme}
        sx={{
          width: { xs: "auto", sm: 250 },
          maxWidth: { xs: 200, sm: 250 },
          pt: ".2rem",
        }}
      >
        Studied full-time in Front-end Development and completed 2 internships
        at H5 Förnyelsebyrå and Volvo Cars
      </Typography>
    </Box>
  );
};

export default Coding;
