import React, { useContext } from "react";
import { Stack } from "@mui/material";
import { ThemeContext } from "../App"; // Import ThemeContext

import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const { darkMode } = useContext(ThemeContext); // Get darkMode state from context

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: darkMode ? "#fff" : "#000", // Text color based on darkMode
            border: "none", // Optional: to remove the button border if you want
            padding: "10px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            textAlign: "left",
            transition: "all 0.3s ease", // Optional: smooth transition for hover effect
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "#fff" : darkMode ? "lightgray" : "red", // Icon color based on selection and dark mode
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
              color: darkMode ? "#fff" : "#000", // Text color based on dark mode
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Categories;
