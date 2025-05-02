import {
  FacebookRounded as Facebook,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "../Contexts/ThemeContextProvider";
import HeaderBackground from "../shared/HeaderBackground";
import ContactForm from "./Contact-elements/ContactForm";

const Contact = () => {
  const { theme } = useTheme();
  const links = [
    {
      icon: LinkedIn,
      href: "https://www.linkedin.com/in/milliecheung/",
    },
    {
      icon: GitHub,
      href: "https://github.com/millie-wy/",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/milliecheung/",
    },
  ];

  return (
    <Container
      maxWidth={false}
      sx={{
        py: "4rem",
        background: "#ECF1F5",
        height: "fit-content",
        minHeight: "calc(100vh - 3.5rem)",
        scrollBehavior: "smooth",
        textAlign: "center",
      }}
    >
      <HeaderBackground />
      <Typography variant="h4" theme={theme}>
        CONTACT ME
      </Typography>

      {/* main content  */}
      <Typography
        theme={theme}
        variant="subtitle1"
        color="#7E7D7D"
        sx={{ pt: "2rem" }}
      >
        Send me a message
      </Typography>
      <ContactForm />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography theme={theme} variant="subtitle1" color="#7E7D7D">
          Or get in touch with me on
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            columnGap: "2rem",
            mt: "1rem",
          }}
        >
          {links.map((link) => (
            <Box
              key={link.href}
              component="a"
              target="_blank"
              href={link.href}
              rel="noopener noreferrer"
            >
              <Box
                component={link.icon}
                color="#3c3c3c"
                fontSize="2rem"
                sx={{
                  "&:hover": {
                    color: "rgb(108, 168, 202)",
                    transform: "scale(1.25)",
                    transition: "ease-in-out 0.25s",
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
