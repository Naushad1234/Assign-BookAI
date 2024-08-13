import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Navigation = () => {
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
        className={`sticky top-0 z-50 flex flex-col sm:flex-row justify-center items-center p-4 sm:p-6 ${
          darkMode ? "bg-[#1E293B] text-[#FFFFFF]" : "bg-white text-[#000000]"
        }`}
      >
        <ul className="flex flex-col sm:flex-row justify-center items-center">
          <li className="mb-4 sm:mb-0 sm:mx-4 hover:text-sky-400 cursor-pointer transition-colors duration-300">
            <a href="#overview">OVERVIEW</a>
          </li>
          <li className="mb-4 sm:mb-0 sm:mx-4 hover:text-sky-400 cursor-pointer transition-colors duration-300">
            <a href="#authentication">AUTHENTICATION</a>
          </li>
          <li className="mb-4 sm:mb-0 sm:mx-4 hover:text-sky-400 cursor-pointer transition-colors duration-300">
            <a href="#endpoints">ENDPOINTS</a>
          </li>
          <li className="mb-4 sm:mb-0 sm:mx-4 hover:text-sky-400 cursor-pointer transition-colors duration-300">
            <a href="#tutorials">TUTORIALS</a>
          </li>
          <li className="mb-4 sm:mb-0 sm:mx-4 hover:text-sky-400 cursor-pointer transition-colors duration-300">
            <a href="#code-examples">CODE EXAMPLES</a>
          </li>
          <li className="sm:mx-4 transition-colors duration-300 hover:text-sky-400 cursor-pointer">
            <a href="#pricing">PRICING</a>
          </li>
        </ul>
        <div className="ml-4">
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Navigation;
