import { allPrograms } from "@/slices/programSlice";
import theme from "@/theme";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const LeadForm = () => {
  const data = useSelector(allPrograms);
 const [formData, setFormData] = useState({
   program: "",
   firstName: "",
   lastName: "",
   email: "",
   phone: "",
   postalCode: "",
   gender: "",
 });

 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData({
     ...formData,
     [name]: value,
   });
 };

 const handleSubmit = (e) => {
   e.preventDefault();
   toast.success("Thanks You!")
   // Form submission logic goes here
   setFormData({
     program: "",
     firstName: "",
     lastName: "",
     email: "",
     phone: "",
     postalCode: "",
     gender: "",
   });
   console.log("Form data submitted:", formData);
 };

  return (
    <Box my={5} id="lead-form">
      <Typography
        fontSize={48}
        textAlign={"center"}
        fontWeight={600}
        color={theme.palette.primaryFontColor}
      >
        Free Consultation For Your Career{" "}
      </Typography>
      <Typography textAlign={"center"} fontSize={18} color={"grey"}>
        {" "}
        Fill up the form and our team will reach out to you
      </Typography>
      <Container>
        <Box component='form' onSubmit={handleSubmit}>
          <FormControl variant='standard' fullWidth required>
            <InputLabel size='small'>Select Program</InputLabel>
            <Select
              name='program'
              value={formData.program}
              onChange={handleChange}
              label='Program'
              placeholder='program'
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              {data.length > 0 &&
                data.map(({ _id, name }) => (
                  <MenuItem key={_id} value={`${name}`}>
                    {name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          <Box display={"flex"} gap={4}>
            <TextField
              label='First Name'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              variant='standard'
              required
              fullWidth
            />
            <TextField
              label='Last Name'
              name='lastName'
              type='text'
              fullWidth
              value={formData.lastName}
              onChange={handleChange}
              variant='standard'
              required
            />
          </Box>
          <Box display={"flex"} gap={4}>
            <TextField
              label='Email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              variant='standard'
              required
              fullWidth
            />
            <TextField
              label='Phone Number'
              name='phone'
              type='text'
              fullWidth
              value={formData.phone}
              onChange={handleChange}
              variant='standard'
              required
            />
          </Box>
          <Box display={"flex"} gap={4}>
            <TextField
              label='Postal Code'
              name='postalCode'
              value={formData.postalCode}
              onChange={handleChange}
              variant='standard'
              required
              fullWidth
            />
            <FormControl variant='standard' fullWidth required>
              <InputLabel size='small'>Gender</InputLabel>
              <Select
                name='gender'
                value={formData.gender}
                onChange={handleChange}
                label='Gender'
                placeholder='Gender'
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value='male'>Male</MenuItem>
                <MenuItem value='female'>Female</MenuItem>
                <MenuItem value='other'>Other</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Button
            type='submit'
            variant=''
            color='primary'
            sx={{ backgroundColor: theme.palette.theme50, mt: 5 }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LeadForm;
