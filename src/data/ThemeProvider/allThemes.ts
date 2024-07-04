import { createTheme } from "@mui/material/styles";

export const emptyTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00a23c",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export const redTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F44336",
    },
    secondary: {
      main: "#2196F3",
    },
  },
});
export const blueTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2196F3",
    },
    secondary: {
      main: "#F44336",
    },
  },
});
