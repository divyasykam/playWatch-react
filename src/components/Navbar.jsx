import React, { useContext } from "react";
import { Stack, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import {
  Notifications,
  AccountCircle,
  DarkMode,
  LightMode,
} from "@mui/icons-material";

import { logo } from "../utils/constants";
import { SearchBar } from "./";
import { ThemeContext } from "../App"; // Import ThemeContext

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
        backgroundColor: "inherit", // Inherit background from ThemeProvider
        zIndex: 10, // Ensure it stays above content
      }}
    >
      <Link
        to="/"
        style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
      >
        {/* Logo */}
        <img src={logo} alt="logo" height={45} />
        {/* PlayTube logo */}
        <img
          src="/PlayWatch.png"
          alt="PlayWatch"
          height={45}
          style={{ marginLeft: "10px" }}
        />
      </Link>

      {/* Add marginTop to SearchBar */}
      <SearchBar style={{ marginTop: "10px" }} />

      <Stack direction="row" spacing={2} alignItems="center">
        <IconButton color="inherit">
          <Notifications />
        </IconButton>
        <IconButton color="inherit" onClick={toggleDarkMode}>
          {darkMode ? <LightMode /> : <DarkMode />} {/* Toggle icon */}
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Navbar;
