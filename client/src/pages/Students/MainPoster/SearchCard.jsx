import { FormControl } from "@mui/material";
import roboImg from "@/assets/students/roboSearch.png";
import { useState } from "react";
import { useTools } from "@/hooks/useTools";
import {
  getFilters,
  getLocations,
  getSearchedProgram,
} from "@/thunk/indexThunk";
import { toast } from "react-toastify";
import FormContainer from "@/components/FormComponents/FormContainer";
import {
  filterForm,
  filterFormSearch,
} from "@/constants/filtersFormDefinitions";
import useStyle from "@/hooks/useStyle";
import { useEffect } from "react";
import { selectProgram } from "@/slices/programSlice";
import MyInput from "@/components/FormComponents/MyInput";

const SearchCard = () => {
  const [formData, setFormData] = useState({
    query: "",
    programLevel: "",
    applicationFee: "",
    costOFLiving: "",
    tuitionFee: "",
    programLength: "",
  });
  const { dispatch, useSelector } = useTools();

  const { theme, Box, MyImg, Typography, GradientButton } = useStyle();

  const { filters } = useSelector(selectProgram);
  filterForm[0].options = filters[filterForm[0].name]
    ? filters[filterForm[0].name]
    : [];
  filterForm[1].options = filters[filterForm[1].name]
    ? filters[filterForm[1].name]
    : [];

  filterForm[2].options = filters[filterForm[2].name]
    ? filters[filterForm[2].name]
    : [];

  filterForm[3].options = filters[filterForm[3].name]
    ? filters[filterForm[3].name]
    : [];
  filterForm[4].options = filters[filterForm[4].name]
    ? filters[filterForm[4].name]
    : [];
  const {
    query,
    programLength,
    programLevel,
    applicationFee,
    costOFLiving,
    tuitionFee,
  } = formData;

  useEffect(() => {
    dispatch(
      getFilters(
        "query=programLevel+applicationFee+costOfLiving+tuitionFee+programLength"
      )
    );
    dispatch(getLocations());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const data = { ...formData };
    if (e.target.files) {
      data[name] = e.target.files[0];
    } else {
      data[name] = value;
    }

    setFormData(data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let searchQuery = "";
    if (!query && query.trim() === "") {
      return toast.error("Search cannot be empty");
    }

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
        bottom: { md: -200, xs: -480 },
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
          <Box sx={{ flexGrow: 1 }}>
            <MyInput
              label="Search"
              name="query"
              handleChange={handleChange}
              styleProps={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "35px",
                  border: "none",
                },
              }}
            />
          </Box>
          <Box>
            <FormControl margin="dense" fullWidth>
              <GradientButton
                buttonText="Search"
                styles={{
                  borderRadius: "40px",
                  mt: { sm: 2, xs: 2, md: 0 },
                }}
                size="small"
                type="submit"
              />
            </FormControl>
          </Box>
        </Box>
        <Box sx={{ mt: 2 }}>
          <FormContainer
            formDefinition={filterForm}
            formPayload={formData}
            handleChange={handleChange}
            grid={true}
            gridTemplateColumns={{ md: "repeat(5,1fr)", xs: "repeat(2,1fr)" }}
          />
        </Box>
      </form>
    </Box>
  );
};

export default SearchCard;
