import { Box } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = ({ value, handleChange }) => {
  return (
    <Box bgcolor={"white"}>
      <ReactQuill theme='snow' value={value} onChange={handleChange} />
    </Box>
  );
};
export default RichTextEditor;
