import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import people from "../../../Media/Icons/people.png";
import { useTheme } from "../../Contexts/ThemeContextProvider";

const Friends = () => {
  const { theme } = useTheme();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const displayElement = () =>
      window.scrollY > 600 ? setDisplay(true) : setDisplay(false);

    window.addEventListener("scroll", displayElement, { passive: true });
    return () => window.removeEventListener("scroll", displayElement);
  });

  return (
    <Box
      sx={{
        pl: { xs: "1.5rem", sm: "2rem" },
        height: 180,
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
        }}
      >
        Meet a lot of new friends from all around the world,
      </Typography>
      <Box
        component="img"
        src={people}
        sx={{
          width: 60,
          height: 60,
          pt: { xs: ".5rem", sm: 0 },
        }}
      />
    </Box>
  );
};

export default Friends;
