import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import hongkong from "../../../Media/Icons/hongkong.png";
import moving from "../../../Media/Icons/moving.png";
import sweden from "../../../Media/Icons/sweden.png";
import { useTheme } from "../../Contexts/ThemeContextProvider";

const Move = () => {
  const { theme } = useTheme();
  const [display, setDisplay] = useState(false);
  const [truckRight, setTruckRight] = useState();

  useEffect(() => {
    const displayElement = () =>
      window.scrollY > 840 ? setDisplay(true) : setDisplay(false);

    window.addEventListener("scroll", displayElement, { passive: true });
    return () => window.removeEventListener("scroll", displayElement);
  });

  useEffect(() => {
    const updateTruckRight = () => {
      const y = window.scrollY;
      const parent = document.getElementById("move-div");
      const aniDiv = document.getElementById("truck-ani-div");
      const truck = document.getElementById("truck");
      const scrollPercent = Math.min(1, (y - 840) / parent.clientHeight);

      const right = scrollPercent * (aniDiv.clientWidth - truck.clientWidth);
      if (scrollPercent > 0) setTruckRight(right);
    };

    window.addEventListener("scroll", updateTruckRight, { passive: true });
    return () => window.removeEventListener("scroll", updateTruckRight);
  });

  return (
    <Box
      id="move-div"
      sx={{
        position: "relative",
        height: 240,
        display: "flex",
        flexDirection: "column",
        zIndex: display ? 99 : 0,
        opacity: display ? 100 : 0,
        transition: "all .5s ease-in-out",
      }}
    >
      <Box
        sx={{
          background: "#3c3c3c",
          width: 15,
          height: 15,
          borderRadius: 50,
          position: "absolute",
          left: -10,
        }}
      />
      <Box
        id="sweden-flag"
        component="img"
        src={sweden}
        sx={{
          position: "absolute",
          width: { xs: 40, sm: 50, md: 60 },
          left: { xs: -75, sm: -85, md: -95 },
          mt: "-10px",
        }}
      />
      <Box
        id="truck-ani-div"
        sx={{
          position: "relative",
          left: { xs: -85, sm: -95, md: -105 },
          height: { xs: 60, sm: 70, md: 80 },
          width: { xs: 225, sm: 385, md: 495 },
          pl: 0,
        }}
      >
        <Box
          id="hk-flag"
          component="img"
          src={hongkong}
          sx={{
            position: "absolute",
            width: { xs: 40, sm: 50, md: 60 },
            right: "-12%",
            mt: "-10px",
          }}
        />
        <Box
          id="truck"
          component="img"
          src={moving}
          sx={{
            position: "absolute",
            width: { xs: 70, sm: 80, md: 90 },
            WebkitTransform: "scaleX(-1)",
            mt: "-33px",
            right: truckRight,
          }}
        />
      </Box>
      <Typography
        variant="subtitle1"
        theme={theme}
        sx={{ pl: { xs: "1.5rem", sm: "2rem" } }}
      >
        2019
      </Typography>
      <Typography
        variant="body1"
        theme={theme}
        sx={{
          width: { xs: "auto", sm: 250 },
          maxWidth: { xs: 200, sm: 250 },
          pt: ".2rem",
          pl: { xs: "1.5rem", sm: "2rem" },
        }}
      >
        Moved to Sweden to start a new chapter of my life
      </Typography>
    </Box>
  );
};

export default Move;
