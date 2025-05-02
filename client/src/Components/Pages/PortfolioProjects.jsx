import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { usePortfolio } from "../Contexts/PortfolioContextProvider";
import { useTheme } from "../Contexts/ThemeContextProvider";

const PortfolioProjects = (props) => {
  const { theme } = useTheme();
  const [readMore, setReadMore] = useState(false);
  const { convertDate } = usePortfolio();

  const formatDate = (dateString) => {
    const formattedDate = convertDate(dateString)
      .toLocaleDateString("en-GB", { month: "short", year: "numeric" })
      .replace(/ /g, " ");
    return formattedDate;
  };

  return (
    <Box
      sx={{
        minWidth: 250,
        background: "#fff",
        borderRadius: "4px",
        display: "flex",
        flexDirection: { xs: "column", sm: "row", md: "row" },
        pt: { xs: "1rem", sm: 0, md: 0 },
      }}
    >
      {/* Preview box */}
      <Box
        sx={{
          minWidth: 250,
          maxWidth: 250,
          maxHeight: 187.5,
          borderRadius: {
            xs: "4px",
            sm: "4px 0 0 0",
            md: "4px 0 0 4px",
          },
          margin: { xs: "auto", sm: 0, md: 0 },
        }}
      >
        {props.project.mediaSrc.length > 20 ? (
          <Box
            component="video"
            width="100%"
            autoPlay
            loop
            muted
            playsInline
            poster={props.project.posterSrc || null}
            sx={{
              borderRadius: {
                maxHeight: 187.5,
                xs: "4px",
                sm: "4px 0 0 0",
                md: "4px 0 0 4px",
              },
            }}
          >
            <source src={props.project.mediaSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </Box>
        ) : (
          <Typography
            variant="body1"
            theme={theme}
            color="#fff"
            sx={{
              backgroundColor: "#B4CEE5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: {
                xs: "4px",
                sm: "4px 0 0 0",
                md: "4px 0 0 4px",
              },
            }}
          >
            PREVIEW
          </Typography>
        )}
      </Box>

      {/* project details */}
      <Box sx={{ px: "1.2rem", py: "1rem" }}>
        <Box width="fit-content">
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
            href={props.project.repo}
          >
            <Typography
              variant="body1"
              theme={theme}
              fontWeight="bold"
              sx={{ "&:hover": { color: "#6ca8ca" } }}
            >
              {props.project.title}
              <OpenInNewIcon
                fontSize="10px"
                sx={{
                  pl: ".3rem",
                  verticalAlign: "text-bottom",
                }}
              />
            </Typography>
          </a>
        </Box>

        <Typography variant="overline" theme={theme} color="#D6D5D5" pt=".2rem">
          {formatDate(props.project.released)}
        </Typography>

        <Box>
          <Typography variant="body2" theme={theme} color="#7E7D7D" py=".7rem">
            {readMore
              ? props.project.description
              : props.project.description.substring(0, 180) + "..."}
            <Typography
              variant="overline"
              theme={theme}
              color="#B4CEE5"
              pl=".3rem"
              sx={{ cursor: "pointer" }}
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read less" : "Read more"}
            </Typography>
          </Typography>
        </Box>
        <Typography variant="overline" theme={theme} color="#D6D5D5">
          Keywords
        </Typography>
        <Box
          sx={{
            pt: ".2rem",
            display: "flex",
            flexWrap: "wrap",
            gap: ".3rem",
          }}
        >
          {props.project.tags.map((tag) => (
            <Typography
              key={tag}
              variant="overline"
              theme={theme}
              color="#B4CEE5"
              sx={{
                border: "1px solid #B4CEE5",
                px: ".2rem",
                borderRadius: "2.5px",
                lineHeight: "1rem",
              }}
            >
              {tag}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioProjects;
