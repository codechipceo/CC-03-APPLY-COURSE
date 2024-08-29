import routes from "@/Routes";
import { RouterProvider } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./components/Footer";

import { Box } from "@mui/material";


function App() {
  return (
    <Box>
      <RouterProvider router={routes} />
      <Footer />
    </Box>
  );
}

export default App;
