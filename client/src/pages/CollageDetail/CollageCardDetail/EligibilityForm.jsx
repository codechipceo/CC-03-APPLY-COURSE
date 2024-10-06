import FormControl from "@mui/material/FormControl";
import { Box, Button } from "@mui/material";
import MyImg from "@/components/MyImg";
import studentsImg from "@/assets/student.png";
import GradientButton from "@/components/Buttons/GradientButton";
import { GradientText } from "@/components/GradientText/GradientText";
import { FormContainer } from "@/components/FormComponents/FormContainer";
import {
  eligibilityForm,
  eligibilityFormFirstCol,
} from "@/constants/formDefinitions";
import useStyle from "@/hooks/useStyle";


const EligibilityForm = ({ onSubmit, handleChange, formData }) => {
  const  theme  = useStyle()
  return (
    <Box
      sx={{
        display: { md: "grid" },
        gridTemplateColumns: { md: "repeat(1,1fr)" },
        width: { xs: 400, sx: 600, md: "auto" },
      }}
    >
      <Box>
        <form onSubmit={onSubmit}>
          <FormContainer
            formDefinition={eligibilityFormFirstCol}
            formPayload={formData}
            handleChange={handleChange}
            grid={true}
            gridTemplateColumns='repeat(2,1fr)'
          />
          <FormContainer
            formDefinition={eligibilityForm}
            formPayload={formData}
            handleChange={handleChange}
            grid={false}
          />

          <FormControl margin='dense'>
            <GradientButton
              size='small'
              styles={{ borderRadius: "10px", boxShadow:'none', '&:hover':{boxShadow:'none'} }}
              buttonText='Submit'
              type='submit'
            />

          </FormControl>
        </form>
      </Box>

      {/* <Box sx={{ mt: { md: 8, xs: 5 } }}>
        <MyImg img={studentsImg} />
      </Box> */}
    </Box>
  );
};

export default EligibilityForm;
