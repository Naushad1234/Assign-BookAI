import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Tutorials = () => {
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
        id="tutorials"
        className={`p-6 rounded-lg shadow-lg max-w-4xl w-full lg:mx-auto ${
          darkMode ? "bg-[#1E293B] text-gray-300" : "bg-white text-black"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2
            className={`text-2xl font-bold pb-4 pt-16 ${
              darkMode ? "text-[#A5A7CA]" : "text-black"
            }`}
          >
            Tutorial
          </h2>
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </div>
        <h3
          className={`font-semibold text-xl mb-2 ${
            darkMode ? "text-[#A5A7CA]" : "text-black"
          }`}
        >
          Step 1: Obtain an API Key
        </h3>
        <p className="mb-4">
          Generate an API key using the button in the Authentication section
          above.
        </p>

        <h3
          className={`font-semibold text-xl mb-2 ${
            darkMode ? "text-[#A5A7CA]" : "text-black"
          }`}
        >
          Step 2: Make a Request
        </h3>
        <p className="mb-4">
          Use your preferred programming language or tool to make a POST request
          to the /api/generate-book endpoint. Include your API key in the header
          and the required parameters in the request body.
        </p>

        <h3
          className={`font-semibold text-xl mb-2 ${
            darkMode ? "text-[#A5A7CA]" : "text-black"
          }`}
        >
          Step 3: Handle the Response
        </h3>
        <p className="mb-4">
          The API will return a response with a job ID. You can use this ID to
          check the status of your book generation job.
        </p>

        <h3
          className={`font-semibold text-xl mb-2 ${
            darkMode ? "text-[#A5A7CA]" : "text-black"
          }`}
        >
          Step 4: Retrieve the Generated Book
        </h3>
        <p className="mb-4">
          Once the job is complete, you can retrieve the generated book using the
          job ID (endpoint to be implemented).
        </p>
      </div>
    </ThemeProvider>
  );
};

export default Tutorials;
