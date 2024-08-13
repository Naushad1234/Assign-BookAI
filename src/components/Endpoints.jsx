import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Endpoints = () => {
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
        id="endpoints"
        className={`p-4 sm:p-6 pt-12 sm:pt-16 rounded-lg shadow-lg max-w-4xl w-full lg:mx-auto ${
          darkMode ? "bg-[#1E293B] text-gray-200" : "bg-white text-black"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2
            className={`text-2xl font-bold ${
              darkMode ? "text-[#A5AEDC]" : "text-black"
            }`}
          >
            Endpoints
          </h2>
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </div>

        <h3
          className={`text-xl mb-2 font-semibold ${
            darkMode ? "text-[#A5A7CA]" : "text-black"
          }`}
        >
          Generate Book
        </h3>
        <div className="mb-6">
          <button className="bg-[#22D3EE] py-1 px-4 rounded-md font-bold">
            POST
          </button>
          <button
            className={`ml-4 py-1 sm:py-2 px-4 sm:px-6 rounded-md font-bold ${
              darkMode ? "bg-[#99a5dd]" : "bg-gray-300"
            }`}
          >
            /api/generate-book
          </button>
        </div>

        <h4
          className={`text-lg font-semibold mb-4 ${
            darkMode ? "text-[#A5A7CA]" : "text-black"
          }`}
        >
          Request Body
        </h4>
        <div className="overflow-x-auto">
          <div
            className={`rounded-lg border ${
              darkMode
                ? "bg-gray-800 border-gray-600"
                : "bg-gray-100 border-gray-400"
            }`}
          >
            <table className="w-full border-collapse">
              <thead>
                <tr
                  className={`${
                    darkMode
                      ? "bg-[#6366F1] text-white"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  <th className="py-3 sm:py-4 px-3 sm:px-4 text-left border-b border-gray-600">
                    Parameter
                  </th>
                  <th className="py-3 sm:py-4 px-3 sm:px-4 text-left border-b border-gray-600">
                    Type
                  </th>
                  <th className="py-3 sm:py-4 px-3 sm:px-4 text-left border-b border-gray-600">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className={`${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                  }`}
                >
                  <td className="py-3 sm:py-4 px-3 sm:px-4 text-[#22D3EE] border-b border-gray-600">
                    api
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 border-b border-gray-600">
                    string
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 border-b border-gray-600">
                    The API provider to use. Options: "openai" or "together"
                  </td>
                </tr>
                <tr
                  className={`${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                  }`}
                >
                  <td className="py-3 sm:py-4 px-3 sm:px-4 text-[#22D3EE] border-b border-gray-600">
                    model
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 border-b border-gray-600">
                    string
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 border-b border-gray-600">
                    The model to use for generating the book.
                  </td>
                </tr>
                <tr
                  className={`${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                  }`}
                >
                  <td className="py-3 sm:py-4 px-3 sm:px-4 text-[#22D3EE] border-b border-gray-600">
                    title
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 border-b border-gray-600">
                    string
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 border-b border-gray-600">
                    The title of the book to generate.
                  </td>
                </tr>
                <tr
                  className={`${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                  }`}
                >
                  <td className="py-3 sm:py-4 px-3 sm:px-4 text-[#22D3EE] border-b border-gray-600">
                    length
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 border-b border-gray-600">
                    number
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 border-b border-gray-600">
                    The length of the generated book in words.
                  </td>
                </tr>
                <tr
                  className={`${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                  }`}
                >
                  <td className="py-3 sm:py-4 px-3 sm:px-4 text-[#22D3EE] border-b border-gray-600">
                    genre
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 border-b border-gray-600">
                    string
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 border-b border-gray-600">
                    The genre of the book (e.g., "fiction", "non-fiction").
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Endpoints;
