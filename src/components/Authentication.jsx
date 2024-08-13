import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Authentication = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [apiKey, setApiKey] = useState("");
  const [submittedApiKey, setSubmittedApiKey] = useState("");

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSubmittedApiKey(apiKey);
      setApiKey("");
      console.log("API Key Submitted:", apiKey);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        id="authentication"
        className={`p-4 sm:p-6 pt-12 sm:pt-16 rounded-lg shadow-lg max-w-4xl w-full lg:mx-auto ${
          darkMode ? "bg-[#1E293B] text-gray-200" : "bg-white text-gray-800"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Authentication
          </h2>
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </div>
        <p>
          To use the API, you need to include your API key in the header of each
          request:
        </p>
        <div
          className={`flex items-center border rounded-md p-2 mb-4 ${
            darkMode ? "border-gray-400" : "border-gray-600"
          }`}
        >
          <span className="mr-2">X-API-Key:</span>
          <input
            type="text"
            className="flex-grow bg-transparent outline-none"
            placeholder="Your API Key"
            value={apiKey}
            onChange={handleApiKeyChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        <button
          className={`font-bold py-2 px-4 sm:px-6 rounded mb-4 ${
            darkMode
              ? "bg-[#22D3EE] hover:bg-blue-700 text-white"
              : "bg-blue-500 hover:bg-blue-700 text-white"
          }`}
        >
          Generate API Key
        </button>
        <div
          className={`flex items-center border rounded-md p-2 ${
            darkMode ? "border-gray-400" : "border-gray-600"
          }`}
        >
          <input
            type="text"
            className="flex-grow bg-transparent outline-none"
            placeholder="Submitted API Key"
            value={submittedApiKey}
            readOnly
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Authentication;
