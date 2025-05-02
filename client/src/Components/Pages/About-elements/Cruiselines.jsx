import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import cruise from "../../../Media/Icons/cruise.png";
import { useTheme } from "../../Contexts/ThemeContextProvider";

const Cruiselines = () => {
  const { theme } = useTheme();
  const [display, setDisplay] = useState(false);
  const [cruiseLeft, setCruiseLeft] = useState(20);

  useEffect(() => {
    const displayElement = () =>
      window.scrollY > 440 ? setDisplay(true) : setDisplay(false);

    window.addEventListener("scroll", displayElement, { passive: true });
    return () => window.removeEventListener("scroll", displayElement);
  });

  useEffect(() => {
    const updateCruiseLeft = () => {
      const y = window.scrollY;
      const parent = document.getElementById("cruise-div");
      const aniDiv = document.getElementById("cruise-ani-div");
      const scrollPercent = Math.min(1, (y - 550) / parent.clientHeight);
      let speed = 0.3;
      let left = scrollPercent * aniDiv.clientWidth * speed;

      if (scrollPercent > 0) setCruiseLeft(left);
    };
    window.addEventListener("scroll", updateCruiseLeft, { passive: true });
    return () => window.removeEventListener("scroll", updateCruiseLeft);
  });

  return (
    <Box
      id="cruise-div"
      sx={{
        pl: { xs: "1.5rem", sm: "2rem" },
        height: 220,
        zIndex: display ? 99 : 0,
        opacity: display ? 100 : 0,
        transition: "all .5s ease-in-out",
        position: "relative",
      }}
    >
      <Typography
        variant="body1"
        theme={theme}
        sx={{
          width: { xs: "auto", sm: 250 },
          maxWidth: { xs: 200, sm: 250 },
        }}
      >
        Through my jobs at two cruiselines, I got the chance to...
      </Typography>
      <Box
        id="cruise-ani-div"
        sx={{
          position: "relative",
          height: 140,
          width: { xs: 280, sm: 300, md: 300 },
        }}
      >
        <Box
          component="img"
          src={cruise}
          sx={{
            position: "absolute",
            width: { xs: 120, sm: 130, md: 140 },
            left: cruiseLeft,
          }}
        />
      </Box>
    </Box>
  );
};

export default Cruiselines;
