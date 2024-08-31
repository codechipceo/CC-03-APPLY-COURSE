import FormControl from "@mui/material/FormControl";
import { Box } from "@mui/material";
import MyImg from "@/components/MyImg";
import studentsImg from "@/assets/student.png";
import GradientButton from "@/components/Buttons/GradientButton";
import { GradientText } from "@/components/GradientText/GradientText";
import { FormContainer } from "@/components/FormComponents/FormContainer";
import {
  eligibilityForm,
  eligibilityFormFirstCol,
} from "@/constants/formDefinitions";

const EligibilityForm = ({ onSubmit, handleChange, formData }) => {
  return (
    <Box
      sx={{
        display: { md: "grid" },
        gridTemplateColumns: { md: "repeat(2,1fr)" },
        width: { xs: 400, sx: 600, md: "auto" },
      }}
    >
      <Box>
        <GradientText>
          <h2>Let Us Know You for Further Process</h2>
        </GradientText>
        <form onSubmit={onSubmit}>
          <FormContainer
            formDefinition={eligibilityFormFirstCol}
            formPayload={formData}
            handleChange={handleChange}
            grid={true}
            gridTemplateColumns="repeat(2,1fr)"
          />
          <FormContainer
            formDefinition={eligibilityForm}
            formPayload={formData}
            handleChange={handleChange}
            grid={false}
          />

          <FormControl margin="dense">
            <GradientButton
              size="small"
              styles={{ borderRadius: "10px" }}
              buttonText="Submit"
              type="submit"
            />
          </FormControl>
        </form>
      </Box>

      <Box sx={{ mt: { md: 8, xs: 5 } }}>
        <MyImg img={studentsImg} />
      </Box>
    </Box>
  );
};

export default EligibilityForm;
