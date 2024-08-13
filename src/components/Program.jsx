import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Program = () => {
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
        id="code-examples"
        className={`pt-12 sm:pt-16 p-4 sm:p-6 rounded-lg shadow-lg max-w-4xl w-full lg:mx-auto ${
          darkMode ? "bg-[#1E293B] text-gray-200" : "bg-white text-black"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-2 ${
              darkMode ? "text-[#A5A7CA]" : "text-black"
            }`}
          >
            Program
          </h2>
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </div>
        <p className="mb-6">
          Below are examples of how to use the Book Generator API with Python and
          Node.js.
        </p>

        <div className="mb-8">
          <h3
            className={`text-xl font-semibold text-[#22D3EE] mb-2 ${
              darkMode ? "text-[#22D3EE]" : "text-[#1E40AF]"
            }`}
          >
            Python
          </h3>
          <div
            className={`bg-gray-800 p-4 rounded-md overflow-x-auto border border-gray-500 ${
              darkMode ? "bg-gray-800" : "bg-gray-100 border-gray-300"
            }`}
          >
            <pre className="text-sm sm:text-base whitespace-pre-wrap p-4">
              <code>
                {`import requests

url = "https://api.example.com/generate-book"
headers = {
    "X-API-Key": "your-api-key",
    "Content-Type": "application/json"
}
data = {
    "api": "openai",
    "model": "text-davinci-003",
    "title": "The Great Adventure",
    "length": 5000,
    "genre": "fiction"
}

response = requests.post(url, headers=headers, json=data)

if response.status_code == 200:
    print("Book generated successfully")
    print(response.json())
else:
    print(f"Failed to generate book. Status code: {response.status_code}")`}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h3
            className={`text-xl font-semibold text-[#22D3EE] mb-2 ${
              darkMode ? "text-[#22D3EE]" : "text-[#1E40AF]"
            }`}
          >
            Node.js
          </h3>
          <div
            className={`bg-gray-800 p-4 rounded-md overflow-x-auto border border-gray-500 ${
              darkMode ? "bg-gray-800" : "bg-gray-100 border-gray-300"
            }`}
          >
            <pre className="text-sm sm:text-base whitespace-pre-wrap p-4">
              <code>
                {`const axios = require('axios');

const url = "https://api.example.com/generate-book";
const headers = {
    "X-API-Key": "your-api-key",
    "Content-Type": "application/json"
};
const data = {
    "api": "openai",
    "model": "text-davinci-003",
    "title": "The Great Adventure",
    "length": 5000,
    "genre": "fiction"
};

axios.post(url, data, { headers })
    .then(response => {
        console.log("Book generated successfully");
        console.log(response.data);
    })
    .catch(error => {
        console.error("Failed to generate book:", error);
    });`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Program;
