import { Box, InputLabel, FormControl, Select, MenuItem } from "@mui/material";

const SelectField = ({
  name,
  label,
  value,
  handleChange,
  options,
  displayKey,
}) => {
  return (
    <Box>
      <FormControl key={name} fullWidth margin="dense">
        <InputLabel color="secondary" id={label} size="small">
          {label}
        </InputLabel>
        <Select
          labelId={label}
          name={name}
          value={value}
          onChange={handleChange}
          size="small"
          color="secondary"
          fullWidth
          label={label}
        >
          {options.map((option) => {
            return (
              <MenuItem key={option.value} value={option._id}>
                {option[displayKey]}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField;
