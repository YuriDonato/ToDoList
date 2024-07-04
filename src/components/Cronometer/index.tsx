import React, { useState, useEffect } from "react";
import { Paper, Typography, Box, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import { translations } from "../../data/Language/translations";
import { useLanguage } from "../../data/Language";

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
});

const DigitalClock = styled(Typography)({
  fontSize: "2rem",
  fontFamily: "monospace",
});

const Cronometer: React.FC = () => {
  const [timeInput, setTimeInput] = useState("");
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const { language } = useLanguage();
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft !== null && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      alert("Time is up!");
    }
    return () => clearTimeout(timer);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    const timeInSeconds = parseInt(timeInput, 10) * 60;
    setTimeLeft(timeInSeconds);
    setIsRunning(true);
  };

  const handleResume = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(null);
    setTimeInput("");
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <Paper elevation={3} sx={{ padding: "1rem" }}>
      <Typography variant="h6" gutterBottom>
        {translations[language].cronometer.text1}
      </Typography>
      <StyledBox>
        {!isRunning && timeLeft === null ? (
          <>
            <TextField
              label={translations[language].cronometer.label}
              variant="outlined"
              value={timeInput}
              onChange={(e) => setTimeInput(e.target.value)}
              sx={{ width: "100%" }}
            />
            <Button variant="contained" color="primary" onClick={handleStart}>
              {translations[language].cronometer.start}
            </Button>
          </>
        ) : (
          <>
            <DigitalClock>{formatTime(timeLeft!)}</DigitalClock>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              {isRunning ? (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handlePause}
                >
                  {translations[language].cronometer.pause}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleResume}
                >
                  {translations[language].cronometer.resume}
                </Button>
              )}
              <Button variant="contained" color="error" onClick={handleReset}>
                {translations[language].cronometer.reset}
              </Button>
            </Box>
          </>
        )}
      </StyledBox>
    </Paper>
  );
};

export default Cronometer;
