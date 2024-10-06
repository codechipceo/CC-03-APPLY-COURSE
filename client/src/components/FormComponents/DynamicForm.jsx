import { Typography, Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

export const DynamicForm = ({
  formDefinition,
  formData,
  handleChange,
  grid,
  styleProps,
  gridTemplateColumns,
}) => {
  // Render form fields
  const renderFormFields = (formDefinition) => {
    return formDefinition.map((field) => {
      switch (field.type) {
        case "select":
          return (
            <Box>
              <FormControl key={field.name} fullWidth margin='dense'>
                <InputLabel color='secondary' id={field.label} size='small'>
                  {field.label}
                </InputLabel>
                <Select
                  labelId={field.label}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  size='small'
                  color='secondary'
                  fullWidth
                  label={field.label}
                  sx={{backgroundColor:'white'}}
                >
                  {field.options.map((option) => {
                    return (
                      <MenuItem
                        key={option.value}
                        value={option?._id ? option._id : option}
                      >
                        {option[field.displayKey]
                          ? option[field.displayKey]
                          : option}
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
                  type='file'
                  id='file-upload'
                  style={{backgroundColor:'white'}}
                  name={field.name}
                  onChange={handleChange}
                  accept={field.mimeType}
                />
              </FormControl>
            </Box>
          );
        default:
          return (
            <FormControl fullWidth key={field.name}>
              <TextField
                label={field.label}
                color='secondary'
                fullWidth
                margin='dense'
                name={field.name}
                size='small'
                value={formData[field.name]}
                onChange={handleChange}
                sx={{ ...styleProps , backgroundColor:'white' }}
              />
            </FormControl>
          );
      }
    });
  };

  if (grid) {
    return (
      <Box
        fullWidth
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
