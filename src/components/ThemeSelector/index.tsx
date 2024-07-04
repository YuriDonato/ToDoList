import React, { useEffect, useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  createTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import CircleIcon from "../CircleIcon";
import { useAuth } from "../../data/ThemeProvider";

const ThemeSelectorContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const ThemeSelector = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentColor, setCurrentColor] = useState<string>("#fff");
  const { currentTheme, setCurrentTheme } = useAuth();

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleChange = (color: string) => {
    setCurrentColor(color);
    handleCloseMenu();
  };

  return (
    <ThemeSelectorContainer>
      <IconButton
        aria-controls="theme-menu"
        aria-haspopup="true"
        onClick={handleOpenMenu}
        color="inherit"
      >
        <CircleIcon color={currentColor} />
      </IconButton>
      <Menu
        id="theme-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={() => setCurrentTheme("red")}>
          <ListItemIcon>
            <CircleIcon color="#F44336" />
          </ListItemIcon>
          <ListItemText primary="Red" />
        </MenuItem>
        <MenuItem onClick={() => setCurrentTheme("blue")}>
          <ListItemIcon>
            <CircleIcon color="#2196F3" />
          </ListItemIcon>
          <ListItemText primary="Blue" />
        </MenuItem>
        {/* Adicione mais cores conforme necessário */}
      </Menu>
    </ThemeSelectorContainer>
  );
};

export default ThemeSelector;
