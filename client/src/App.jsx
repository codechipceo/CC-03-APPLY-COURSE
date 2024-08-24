import routes from "@/Routes";
import { RouterProvider } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Footer from "./components/Footer";

function App() {
  return (
    <Box>
      <RouterProvider router={routes} />
      <Footer />
    </Box>
  );
}

export default App;
