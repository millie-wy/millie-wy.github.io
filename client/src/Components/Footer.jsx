import { Container, Typography } from "@mui/material";
import { useTheme } from "./Contexts/ThemeContextProvider";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <Container
      sx={{
        textAlign: "center",
        height: "1.5rem",
        background: "transparent",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Typography theme={theme} variant="overline">
        Millie Cheung © 2023. All rights reserved.
      </Typography>
    </Container>
  );
};

export default Footer;
