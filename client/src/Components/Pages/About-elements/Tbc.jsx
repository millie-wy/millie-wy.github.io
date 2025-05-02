import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "../../Contexts/ThemeContextProvider";

const Tbc = () => {
  const { theme } = useTheme();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const displayElement = () =>
      window.scrollY > 1120 ? setDisplay(true) : setDisplay(false);

    window.addEventListener("scroll", displayElement, { passive: true });
    return () => window.removeEventListener("scroll", displayElement);
  });
  return (
    <Box
      sx={{
        pl: { xs: "1.5rem", sm: "2rem" },
        position: "relative",
        height: 20,
        zIndex: display ? 99 : 0,
        opacity: display ? 100 : 0,
        transition: "all .5s ease-in-out",
      }}
    >
      <Box
        sx={{
          background: "#3c3c3c",
          width: 10,
          height: 10,
          borderRadius: 50,
          position: "absolute",
          left: -7.5,
          top: 12,
        }}
      />
      <Typography variant="subtitle1" theme={theme} sx={{ mt: 1 }}>
        TO BE CONTINUED
      </Typography>
    </Box>
  );
};

export default Tbc;
