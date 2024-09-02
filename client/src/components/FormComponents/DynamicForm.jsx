import { Typography, Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

const DynamicForm = ({
  formDefinition,
  formData,
  handleChange,
  grid,
  styleProps,
  gridTemplateColumns,
}) => {
  // Render form fields
  const renderFormFields = (formDefinition) => {
    return formDefinition.map((field, i) => {
      switch (field.type) {
        case "select":
          return (
            <Box key={field.name}>
              <FormControl margin="dense" fullWidth>
                <InputLabel color="secondary" id={field.label} size="small">
                  {field.label}
                </InputLabel>
                <Select
                  labelId={field.label}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  size="small"
                  color="secondary"
                  label={field.label}
                >
                  {field.options.map((option) => {
                    return (
                      <MenuItem key={option.value} value={option._id}>
                        {option[field.displayKey]}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          );
        case "file":
          return (
            <Box display={"flex"} my={5}>
              <Typography>{field.label}</Typography>

              <FormControl>
                <input
                  type="file"
                  id="file-upload"
                  name={field.name}
                  onChange={handleChange}
                  accept={field.mimeType}
                />
              </FormControl>
            </Box>
          );
        default:
          return (
            <FormControl key={field.name} fullWidth>
              <TextField
                label={field.label}
                color="secondary"
                margin="dense"
                name={field.name}
                size="small"
                value={formData[field.name]}
                onChange={handleChange}
                sx={{ ...styleProps }}
              />
            </FormControl>
          );
      }
    });
  };

  if (grid) {
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: gridTemplateColumns,
          gap: 2,
        }}
      >
        {renderFormFields(formDefinition)}
      </Box>
    );
  }

  return renderFormFields(formDefinition);
};

export default DynamicForm;
