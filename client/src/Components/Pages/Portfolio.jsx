import { SortRounded } from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  Container,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { usePortfolio } from "../Contexts/PortfolioContextProvider";
import { useTheme } from "../Contexts/ThemeContextProvider";
import PortfolioProjects from "./PortfolioProjects";
import HeaderBackground from "../shared/HeaderBackground";

const Portfolio = () => {
  const { theme } = useTheme();
  const { isLoading, fetchPortfolio, portfolio, convertDate } = usePortfolio();
  const [sort, setSort] = useState("Newest");
  const [toggleSort, setToggleSort] = useState(null);
  const open = Boolean(toggleSort);

  const handleClick = (e) => setToggleSort(e.currentTarget);
  const handleClose = () => setToggleSort(null);

  const sortCriteria = ["Newest", "Oldest", "A-Z", "Z-A"];

  useEffect(() => {
    fetchPortfolio();
  }, [fetchPortfolio]);

  const selectSortCriteria = (e) => {
    setSort(e.target.innerText.trim());
    handleClose();
  };

  const sortData = (a, b) =>
    sort === "Z-A"
      ? b.title.localeCompare(a.title)
      : sort === "A-Z"
      ? a.title.localeCompare(b.title)
      : sort === "Oldest"
      ? convertDate(a.released) > convertDate(b.released)
        ? 1
        : -1
      : convertDate(a.released) < convertDate(b.released)
      ? 1
      : -1;

  return isLoading ? (
    <Container
      maxWidth={false}
      sx={{
        py: "4rem",
        textAlign: "center",
        background: "#ECF1F5",
        height: "fit-content",
        minHeight: "calc(100vh - 3.5rem)",
        overflow: "hidden",
        scrollBehavior: "smooth",
      }}
    >
      <HeaderBackground />
      <CircularProgress size="2rem" sx={{ color: "#3c3c3c" }} />
      <Typography theme={theme} variant="subtitle1" pt="1rem">
        Loading...
      </Typography>
    </Container>
  ) : (
    <Container
      maxWidth={false}
      sx={{
        py: "4rem",
        background: "#ECF1F5",
        height: "fit-content",
        minHeight: "calc(100vh - 3.5rem)",
        overflow: "hidden",
        scrollBehavior: "smooth",
      }}
    >
      <HeaderBackground />
      <Typography variant="h4" theme={theme} textAlign="center">
        MY PORTFOLIO
      </Typography>

      {/* toolbar */}
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            placeItems: "center",
            justifyContent: "space-between",
            pt: "2.5rem",
            pb: "1rem",
          }}
        >
          <Typography
            variant="body1"
            theme={theme}
            sx={{ fontWeight: "bold", textTransform: "uppercase" }}
          >
            {portfolio.length} Projects
          </Typography>

          <Typography
            id="sort-button"
            variant="body2"
            theme={theme}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              cursor: "pointer",
              height: "1rem",
              "&:hover": { color: "#6ca8ca" },
            }}
            onClick={handleClick}
          >
            <SortRounded fontSize="small" sx={{ pr: ".3rem" }} />
            Sort by {sort}
          </Typography>

          {/* sort menu */}
          <Menu
            aria-labelledby="sort-button"
            anchorEl={toggleSort}
            open={open}
            onClose={handleClose}
            sx={{
              "& .MuiPaper-root": {
                background: "rgb(214,213,213,.85)",
                boxShadow: "none",
                borderRadius: "2px",
              },
            }}
            anchorOrigin={{
              vertical: 22,
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {sortCriteria.map((criteria) => (
              <MenuItem
                key={criteria}
                onClick={selectSortCriteria}
                sx={{
                  minHeight: "30px",
                }}
              >
                <Typography variant="body2" theme={theme} sx={{ width: 65 }}>
                  {criteria}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "1.3rem", sm: "1.4rem", md: "1.5rem" },
          }}
        >
          {portfolio
            .sort((a, b) => sortData(a, b))
            .map((project) => (
              <PortfolioProjects key={project._id} project={project} />
            ))}
        </Box>
      </Container>
    </Container>
  );
};

export default Portfolio;
