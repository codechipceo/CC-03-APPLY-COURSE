import { Button, FormControl } from "@mui/material";
import roboImg from "@/assets/students/roboSearch.png";
import { useState } from "react";
import { useTools } from "@/hooks/useTools";
import {
  getAllFilters,
  getAllLocations,
  getAllPrograms,
  getSearchedProgram,
} from "@/thunk/indexThunk";
import { toast } from "react-toastify";
import { FormContainer } from "@/components/FormComponents/FormContainer";
import {
  filterForm,
  filterFormSearch,
} from "@/constants/filtersFormDefinitions";
import useStyle from "@/hooks/useStyle";
import { useEffect } from "react";

const isEmpty = (query, formData) => {
  const isFormDataEmpty = Object.values(formData).every((item) => !item);
  if (query.trim() === "" && isFormDataEmpty) return true;
  return false;
};
const SearchCard = () => {
  const [formData, setFormData] = useState({
    query: "",
    programLevel: "",
    applicationFee: "",
    costOFLiving: "",
    locationName: "",
    tuitionFee: "",
    programLength: "",
  });
  const { dispatch } = useTools();
  const [locations, setLocation] = useState([]);
  const [programLevelFilter, setProgramLevelFilter] = useState([]);
  const [tuitionFeeFilter, setTuitionFee] = useState([]);
  const [programLengthFilter, setProgramLength] = useState([]);
  const [applicationFeeFilter, setApplicationFee] = useState([]);

  const { theme, Box, MyImg, Typography, GradientButton } = useStyle();

  const {
    query,
    programLength,
    programLevel,
    applicationFee,
    costOFLiving,
    tuitionFee,
  } = formData;

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
    e?.preventDefault();
    let searchQuery = "";

    if (query.indexOf(" ") !== -1) {
      let terms = query.split(" ");
      searchQuery = searchQuery + terms.join("+");
    } else {
      searchQuery = searchQuery + query;
    }
    const params = new URLSearchParams({ searchQuery: query, ...formData });

    console.log(params);

    dispatch(getSearchedProgram(params));
  };

  useEffect(() => {
    const result = isEmpty(query, formData);
    if (result === false) {
      onSubmit();
    }
  }, [formData, dispatch]);
  useEffect(() => {
    dispatch(getAllFilters()).then(({ payload }) => {
      const { programLevel, applicationFee, tuitionFee, programLength } =
        payload?.data ?? {};
      setApplicationFee(applicationFee);
      setTuitionFee(tuitionFee);
      setProgramLength(programLength);
      setProgramLevelFilter(programLevel);
    });
    dispatch(getAllLocations()).then((res) => {
      let data = res.payload.data;
      setLocation(data);
    });
  }, []);

  filterForm[0].options = locations ?? [];
  filterForm[1].options = programLevelFilter ?? [];
  filterForm[2].options = tuitionFeeFilter ?? [];
  filterForm[3].options = programLengthFilter ?? [];
  filterForm[4].options = applicationFeeFilter ?? [];

  const clearFilters = () => {
      const isFormDataEmpty = Object.values(formData).every((item) => !item);

    if (isFormDataEmpty === false) {
      setFormData({
        query: "",
        programLevel: "",
        applicationFee: "",
        costOFLiving: "",
        locationName: "",
        tuitionFee: "",
        programLength: "",
      });

      dispatch(getAllPrograms());
    }
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
          textAlign: "justify",

          position: "relative",
        }}
      >
        {/* <Typography
          variant='span'
          sx={{ position: "absolute", top: -120, left: -130 }}
        >
          <MyImg img={roboImg} />
        </Typography> */}
        Use our AI-powered platform to find your perfect program in seconds
      </Typography>

      <form onSubmit={onSubmit}>
        <Box sx={{ display: { md: "flex" }, gap: 2 }}>
          <Box sx={{ flexGrow: 1 }}>
            <FormContainer
              formDefinition={filterFormSearch}
              formPayload={formData}
              handleChange={handleChange}
              grid={false}
              styleProps={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "35px",
                  border: "none",
                },
              }}
            />
          </Box>
          <Box>
            <FormControl margin='dense' fullWidth>
              <GradientButton
                buttonText='Search'
                styles={{
                  borderRadius: "40px",
                  mt: { sm: 2, xs: 2, md: 0 },
                }}
                size='small'
                type='submit'
              />
            </FormControl>
            <Button
              onClick={() => {
                clearFilters();
              }}
            >
              Clear Filters
            </Button>
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
