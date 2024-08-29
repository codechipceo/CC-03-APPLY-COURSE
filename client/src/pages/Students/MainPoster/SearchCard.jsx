import GradientButton from "@/components/Buttons/GradientButton";
import { Box, Typography, useTheme } from "@mui/material";
import roboImg from "@/assets/students/roboSearch.png";
import TextField from "@mui/material/TextField";
import React from "react";
import MyImg from "@/components/MyImg";
import { useState } from "react";
import { useTools } from "@/hooks/useTools";
import { getSearchedProgram } from "@/thunk/indexThunk";

const SearchCard = () => {
  const [query, setQuery] = useState("");
  const theme = useTheme();
  const { dispatch } = useTools();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let searchQuery = "";
    if (searchQuery.indexOf("=") === -1) {
      searchQuery = "searchQuery=";
    }
    if (query.indexOf(" ") !== -1) {
      let terms = query.split(" ");
      searchQuery = searchQuery + terms.join("+");
    } else {
      searchQuery = searchQuery + query;
    }
    dispatch(getSearchedProgram(searchQuery));
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        my: { md: 10 },
        boxShadow: { md: 3, xs: "auto" },
        px: { md: 10, xs: 2 },
        py: 5,
        borderRadius: "20px",
        position: "absolute",
        bottom: { md: -200, xs: -180 },
        right: { md: "9%" },
        width: { md: "70%" },
      }}
    >
      <Typography
        sx={{
          typography: theme.typography.heading4,

          mb: 4,
          ml: 10,
          position: "relative",
        }}
      >
        <Typography
          variant="span"
          sx={{ position: "absolute", top: -120, left: -130 }}
        >
          <MyImg img={roboImg} />
        </Typography>
        Use our AI-powered platform to find your perfect program in seconds
      </Typography>

      <form onSubmit={onSubmit}>
        <Box sx={{ display: { md: "flex" }, gap: 2 }}>
          <TextField
            label="Search For the Program"
            variant="outlined"
            value={query}
            onChange={onChange}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "35px",
                border: "none",
              },

              py: 0,
            }}
            fullWidth
          />
          <GradientButton
            buttonText="Search"
            styles={{
              borderRadius: "40px",
              px: 5,
              py: 0,
              mt: { sm: 2, xs: 2, md: 0 },

              width: {
                xs: "100%",
                sm: "100%",
                md: "auto",
              },
            }}
            type="submit"
          />
        </Box>
      </form>
    </Box>
  );
};

export default SearchCard;
