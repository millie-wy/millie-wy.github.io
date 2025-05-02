import { Box, Container, Typography } from "@mui/material";
import notfound from "../../Media/Icons/not-found.png";
import { useTheme } from "../Contexts/ThemeContextProvider";
import HeaderBackground from "../shared/HeaderBackground";

const NotFound = () => {
  const { theme } = useTheme();
  return (
    <Container
      maxWidth={false}
      sx={{
        py: "4rem",
        background: "#ECF1F5",
        minHeight: "calc(100vh - 3.5rem)",
        overflow: "hidden",
        scrollBehavior: "smooth",
        display: "flex",
        flexDirection: "column",
        placeContent: "center",
        placeItems: "center",
      }}
    >
      <HeaderBackground />

      <Box component="img" src={notfound} sx={{ width: 60, pb: "1rem" }} />
      <Typography variant="h6" theme={theme}>
        This page does not seem to exist :(
      </Typography>
    </Container>
  );
};

export default NotFound;
