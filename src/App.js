import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from "./components";

// Create a context for theme management
export const ThemeContext = createContext();

const App = () => {
  const [darkMode, setDarkMode] = useState(true); // Manage dark mode state

  // Themes for light and dark modes
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <BrowserRouter>
          {/* Global scrollable container */}
          <Box
            sx={{
              minHeight: "100vh",
              overflowY: "auto", // Enable vertical scrolling
              backgroundColor: darkMode ? "#000" : "#fff", // Adjust based on theme
              "&::-webkit-scrollbar": {
                width: "10px", // Scrollbar width
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: darkMode ? "#888" : "#ccc", // Scrollbar thumb color
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: darkMode ? "#555" : "#aaa", // Hover effect
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: darkMode ? "#222" : "#f0f0f0", // Scrollbar track color
              },
            }}
          >
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Feed />} />
              <Route path="/video/:id" element={<VideoDetail />} />
              <Route path="/channel/:id" element={<ChannelDetail />} />
              <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
