import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Overview = () => {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        id="overview"
        className={`${
          darkMode ? "bg-[#1E293B] text-gray-200" : "bg-white text-gray-800"
        } pt-12 sm:pt-16 p-4 sm:p-6 rounded-lg shadow-lg max-w-4xl w-full lg:mx-auto`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Overview</h2>
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </div>
        <p>
          The Book Generator API allows you to generate books on various topics
          using different language models. This documentation provides details on
          how to use the API, including authentication, available endpoints, and
          code examples.
        </p>
      </div>
    </ThemeProvider>
  );
};

export default Overview;
