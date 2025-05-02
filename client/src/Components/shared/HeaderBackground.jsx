import { Box } from "@mui/material";

const HeaderBackground = () => {
  return (
    <Box
      sx={{
        background: "#ECF1F5",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: -99,
        height: "4rem",
      }}
    />
  );
};

export default HeaderBackground;
