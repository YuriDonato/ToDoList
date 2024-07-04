import React from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useLanguage } from "../data/Language";

const LanguageSwitcher: React.FC = () => {
  const { setLanguage } = useLanguage();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        style={{ marginLeft: "1rem" }}
        onClick={handleClick}
        color="inherit"
      >
        <LanguageIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          style: { backgroundColor: "#000", color: "white" },
        }}
      >
        <MenuItem
          onClick={() => {
            setLanguage("eng");
            handleClose();
          }}
          style={{ backgroundColor: "#000", color: "white" }}
        >
          English
        </MenuItem>
        <MenuItem
          onClick={() => {
            setLanguage("ptbr");
            handleClose();
          }}
          style={{ backgroundColor: "#000", color: "white" }}
        >
          Português
        </MenuItem>
        <MenuItem
          onClick={() => {
            setLanguage("esp");
            handleClose();
          }}
          style={{ backgroundColor: "#000", color: "white" }}
        >
          Spanish
        </MenuItem>
        <MenuItem
          onClick={() => {
            setLanguage("rus");
            handleClose();
          }}
          style={{ backgroundColor: "#000", color: "white" }}
        >
          Русский
        </MenuItem>
        <MenuItem
          onClick={() => {
            setLanguage("mandarin");
            handleClose();
          }}
          style={{ backgroundColor: "#000", color: "white" }}
        >
          普通话
        </MenuItem>
        <MenuItem
          onClick={() => {
            setLanguage("de");
            handleClose();
          }}
          style={{ backgroundColor: "#000", color: "white" }}
        >
          Deutsch
        </MenuItem>
        <MenuItem
          onClick={() => {
            setLanguage("fr");
            handleClose();
          }}
          style={{ backgroundColor: "#000", color: "white" }}
        >
          Français
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LanguageSwitcher;
