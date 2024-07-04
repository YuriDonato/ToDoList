import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  Grid,
  CssBaseline,
} from "@mui/material";
import { styled } from "@mui/system";
import { translations } from "./data/Language/translations";
import { useLanguage } from "./data/Language";
import Calendar from "./components/Calendar";
import ToDo from "./components/ToDo";
import Cronometer from "./components/Cronometer";
import LanguageSwitcher from "./components/languageSwitcher";
import ThemeSelector from "./components/ThemeSelector";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "./data/ThemeProvider";
import { blueTheme, emptyTheme, redTheme } from "./data/ThemeProvider/allThemes";

const AppContainer = styled(Container)({
  marginTop: "2rem",
});

const App: React.FC = () => {
  const { currentTheme } = useAuth();
  const [actualTheme, setActualTheme] = useState<Theme>(emptyTheme);
  const { language } = useLanguage();

  useEffect(() => {
    console.log(currentTheme);
    switch (currentTheme) {
      case 'blue':
        setActualTheme(blueTheme);
        break;
      case 'red':
        setActualTheme(redTheme);
        break;
      default:
        setActualTheme(emptyTheme);
        break;
    }
  }, [currentTheme]);

  return (
    <ThemeProvider theme={actualTheme}>
      <CssBaseline />
      <body>
        <AppContainer maxWidth="lg">
          <AppBar position="static">
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Typography variant="h6">
                {translations[language].header.text1}
              </Typography>
              <div>
                <LanguageSwitcher />
                <ThemeSelector />
              </div>
            </Toolbar>
          </AppBar>
          <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
            <Grid item xs={12} sm={4}>
              <Calendar />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ToDo />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Cronometer />
            </Grid>
          </Grid>
        </AppContainer>
      </body>
    </ThemeProvider>
  );
};

export default App;
