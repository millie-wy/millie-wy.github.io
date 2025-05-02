import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  MenuItem,
  SwipeableDrawer,
  Toolbar,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headerMenu = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "PORTFOLIO", href: "/portfolio" },
    { label: "CONTACT", href: "/contact" },
  ];
  const [anchorMenu, setAnchorMenu] = useState(false);
  const handleCloseMenu = () => setAnchorMenu(false);
  const handleOpenMenu = () => setAnchorMenu(true);
  const [bgColor, setBgColor] = useState("transparent");
  const [fontColor, setFontColor] = useState("#3c3c3c");
  const [hoverFontBg, setHoverFontBg] = useState("rgba(108,168,202,.2)");

  useEffect(() => {
    const adjustHeaderColor = () => {
      if (anchorMenu || window.scrollY >= 90) {
        setBgColor("#6ca8ca");
        setFontColor("#fff");
        setHoverFontBg("rgba(255,255,255,.3)");
      } else {
        setBgColor("transparent");
        setFontColor("#3c3c3c");
        setHoverFontBg("rgba(108,168,202,.2)");
      }
    };
    window.addEventListener("scroll", adjustHeaderColor, { passive: true });
    return () => window.removeEventListener("scroll", adjustHeaderColor);
  }, [anchorMenu]);

  return (
    <AppBar
      sx={{
        background: bgColor,
        position: "sticky",
        display: "flex",
        flexDirection: "row",
        height: "3.5rem",
        transition: "ease-in-out 0.5s",
        boxShadow: "none",
      }}
    >
      {/* hamburger menu in xs screen  */}
      <Toolbar sx={{ display: { xs: "flex", sm: "none" } }}>
        <IconButton
          aria-label="menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={anchorMenu ? handleCloseMenu : handleOpenMenu}
          sx={{
            zIndex: 999,
            color: fontColor,
            "&:hover": {
              background: hoverFontBg,
            },
          }}
        >
          {anchorMenu ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
        </IconButton>

        <SwipeableDrawer
          id="menu-appbar"
          anchor="top"
          open={anchorMenu}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
          sx={{ zIndex: 998 }}
        >
          <Box
            sx={{
              pt: "3.5rem",
              pb: "1rem",
              background: "#6ca8ca",
            }}
          >
            {headerMenu.map((item) => (
              <MenuItem
                component={Link}
                key={item.label}
                onClick={handleCloseMenu}
                to={item.href}
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                  fontFamily: "Averia Sans Libre",
                  minHeight: 0,
                  display: "flex",
                  placeContent: "center",
                }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Box>
        </SwipeableDrawer>
      </Toolbar>

      {/* menu in sm or larger screen */}
      <Box
        width="1"
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {headerMenu.map((item) => (
          <Button
            component={Link}
            key={item.label}
            to={item.href}
            sx={{
              color: fontColor,
              fontSize: "1rem",
              fontWeight: "600",
              fontFamily: "Averia Sans Libre",
              height: "1.5rem",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: hoverFontBg,
              },
            }}
          >
            {item.label}
          </Button>
        ))}
      </Box>
    </AppBar>
  );
};

export default Header;
