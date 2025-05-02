import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import flight from "../../../Media/Icons/flight.png";
import { useTheme } from "../../Contexts/ThemeContextProvider";

const Travel = () => {
  const { theme } = useTheme();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const displayElement = () =>
      window.scrollY > 710 ? setDisplay(true) : setDisplay(false);

    window.addEventListener("scroll", displayElement, { passive: true });
    return () => window.removeEventListener("scroll", displayElement);
  });

  return (
    <Box
      sx={{
        pl: { xs: "1.5rem", sm: "2rem" },
        height: 200,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        zIndex: display ? 99 : 0,
        opacity: display ? 100 : 0,
        transition: "all .5s ease-in-out",
      }}
    >
      <Typography
        variant="body1"
        theme={theme}
        sx={{
          width: { xs: "auto", sm: 250 },
          maxWidth: { xs: 200, sm: 250 },
          pr: ".5rem",
        }}
      >
        And travel around to get to know how amazing this world is!
      </Typography>
      <Box
        component="img"
        src={flight}
        sx={{
          width: 60,
          height: 60,
          pt: { xs: ".5rem", sm: 0 },
        }}
      />
    </Box>
  );
};

export default Travel;
