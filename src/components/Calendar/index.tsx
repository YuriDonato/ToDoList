import React, { useState } from "react";
import { Paper, Typography, Box } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { translations } from "../../data/Language/translations";
import { useLanguage } from "../../data/Language";

const Calendar: React.FC = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const { language } = useLanguage();
  return (
    <Paper elevation={3} sx={{ padding: "1rem" }}>
      <Typography variant="h6" gutterBottom>
        {translations[language].calendar.text1}
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <DateCalendar />
        </Box>
      </LocalizationProvider>
    </Paper>
  );
};

export default Calendar;
