import { FormControl, TextField } from "@mui/material";

const MyInput = ({ name, label, value, handleChange, styleProps }) => {
  return (
    <FormControl fullWidth key={name}>
      <TextField
        label={label}
        color="secondary"
        fullWidth
        margin="dense"
        name={name}
        size="small"
        value={value}
        onChange={handleChange}
        sx={{ ...styleProps }}
      />
    </FormControl>
  );
};

export default MyInput;
