import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Pricing = () => {
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
        id="pricing"
        className={`p-6 pt-16 rounded-lg shadow-lg max-w-4xl w-full lg:mx-auto ${
          darkMode ? "bg-[#1E293B] text-gray-200" : "bg-white text-black"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2
            className={`text-2xl font-bold mb-8 ${
              darkMode ? "text-[#A5AEDC]" : "text-[#1E40AF]"
            }`}
          >
            API Pricing
          </h2>
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </div>

        <h3
          className={`text-xl mb-2 font-semibold ${
            darkMode ? "text-[#A5A7CA]" : "text-[#1E40AF]"
          }`}
        >
          Pricing Details
        </h3>
        <div className="overflow-x-auto mb-6">
          <div
            className={`bg-gray-800 rounded-lg border border-gray-600 ${
              darkMode ? "bg-gray-800" : "bg-gray-100 border-gray-300"
            }`}
          >
            <table
              className={`w-full ${
                darkMode ? "text-gray-200" : "text-black"
              }`}
            >
              <thead>
                <tr
                  className={`${
                    darkMode ? "bg-[#6366F1]" : "bg-[#e0e7ff]"
                  } border-b border-gray-600`}
                >
                  <th className="py-4 px-6 text-left">API</th>
                  <th className="py-4 px-6 text-left">Model</th>
                  <th className="py-4 px-6 text-left">Price per 1K tokens</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className={`border-b border-gray-600 hover:bg-gray-700 ${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                  }`}
                >
                  <td className="py-4 px-6 text-[#22D3EE]">OpenAI</td>
                  <td className="py-4 px-6">GPT-3.5</td>
                  <td className="py-4 px-6">$0.002</td>
                </tr>
                <tr
                  className={`border-b border-gray-600 hover:bg-gray-700 ${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                  }`}
                >
                  <td className="py-4 px-6 text-[#22D3EE]">OpenAI</td>
                  <td className="py-4 px-6">GPT-4</td>
                  <td className="py-4 px-6">$0.03</td>
                </tr>
                <tr
                  className={`border-b border-gray-600 hover:bg-gray-700 ${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                  }`}
                >
                  <td className="py-4 px-6 text-[#22D3EE]">Together AI</td>
                  <td className="py-4 px-6">Llama-2-70b</td>
                  <td className="py-4 px-6">$0.0008</td>
                </tr>
                <tr
                  className={`border-b border-gray-600 hover:bg-gray-700 ${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                  }`}
                >
                  <td className="py-4 px-6 text-[#22D3EE]">Together AI</td>
                  <td className="py-4 px-6">Llama-2-13b</td>
                  <td className="py-4 px-6">$0.0006</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h4
          className={`text-lg font-semibold mt-8 mb-4 ${
            darkMode ? "text-[#A5A7CA]" : "text-[#1E40AF]"
          }`}
        >
          Token Estimation
        </h4>
        <p className="mb-6">
          On average, 1 token is approximately 4 characters or 0.75 words. For
          precise pricing, we recommend using our token calculator tool.
        </p>

        <h4
          className={`text-lg font-semibold mt-8 mb-4 ${
            darkMode ? "text-[#A5A7CA]" : "text-[#1E40AF]"
          }`}
        >
          Billing
        </h4>
        <p>
          You will only be charged for the tokens used in generating the book. The
          API tracks token usage and bills accordingly. Detailed usage reports are
          available in your account dashboard.
        </p>
      </div>
    </ThemeProvider>
  );
};

export default Pricing;
