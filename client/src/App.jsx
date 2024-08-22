import routes from "@/Routes";
import { RouterProvider } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <RouterProvider router={routes} />
    </Box>
  );
}

export default App;
